
const fs = require('fs');
const path = require('path');
const Uglify = require('uglify-es');
const webpack = require('webpack');
const zipFolder = require('zip-folder');
const ESLint = require('eslint').linter;
const documentation = require('documentation');
const DocToHTML = require('./build/DocToHTML.js');
const package = require('./package.json');
const config = require('./config.json');

//*****************************************************************************

function packModules (callback) {
  webpack({
    mode: 'development',
    entry: `${__dirname}/src/icons/triangulateSVG.js`,
    output: {
      path: `${__dirname}/lib`,
      filename: 'triangulateSVG.js'
    },
  }, (err, stats) => {
    if (err) {
      callback(err);
    }

    const content = fs.readFileSync(`${__dirname}/lib/triangulateSVG.js`).toString().replace(/π/g, 'PI');
    fs.writeFileSync(`${__dirname}/lib/triangulateSVG.js`, content);
    callback();
  });
}

function readFiles (files) {
  return files.map(f => {
    return fs.readFileSync(f).toString();
  }).join('\n');
}

function copy (file, dst) {
  fs.writeFileSync(dst, fs.readFileSync(file));
}

function safeMkdirSync (dir) {
  try {
    fs.readdirSync(dir);
  } catch (ex) {
    fs.mkdirSync(dir);
  }
}

function minify (str) {
  const res = Uglify.minify(str);

  if (res.error) {
    throw new Error(res.error);
  }

  return res.code;
}

function escapeCode (str) {
  return str.replace(/'/g, "\'").replace(/ *[\r\n]+ */g, '\n').replace(/\\/g, "\\\\").replace(/ +/g, ' ');
}

//*****************************************************************************

function taskShaders (shaders) {
  const src = 'src/shader';

  let str = 'const shaders = {};\n\n';

  shaders.forEach(name => {
    str += `shaders['${name}'] = ${JSON.stringify({
      name: name,
      vs: escapeCode(readFiles([`${src}/${name}.vs`]), 'ascii'),
      fs: escapeCode(readFiles([`${src}/${name}.fs`]), 'ascii')
    })};\n\n`;
  });

  return str;
}

function taskWorkers (workers) {
  let str = 'const workers = {};\n\n';

  for (let name in workers) {
    const content = readFiles(workers[name]);

    taskLint(content);

    const minified = minify(content);
    const escaped = escapeCode(minified);

    str += `workers['${name}'] = '${escaped}';\n\n`;
  }

  return str;
}

function taskLint (str) {
  const config = {
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "script",
      "ecmaFeatures": {
        "jsx": false,
        "experimentalObjectRestSpread": true
      }
    },
    "rules": {
      "semi": 2
    }
  };

  const messages = ESLint.verify(str, config);
  if (messages.length) {
    const lines = str.split('\n');
    const err = messages.map(err => {
      return `${err.message} in line ${err.line}\n${lines[err.line-1]}`;
    }).join('\n\n');

    throw new Error(err);
  }
}

function taskArchive (src, dst, callback) {
  zipFolder(src, dst, err => {
    if (err) {
      throw new Error(err);
    }
    callback();
  });
}

//*****************************************************************************

const startTime = Date.now();

packModules(err => {
  const code = [
    '(function(){',
    readFiles(config.libs),
    taskShaders(config.shaders),
    taskWorkers(config.workers),
    readFiles(config.src),
    'OSMBuildings.VERSION = \'' + package.version + '\';',
    '}());'
  ].join('\n');

  taskLint(code);

  safeMkdirSync('dist');
  safeMkdirSync('dist/OSMBuildings');

  fs.writeFileSync('dist/OSMBuildings/OSMBuildings.debug.js', code);
  copy('src/style.css', 'dist/OSMBuildings/OSMBuildings.css');

  fs.writeFileSync('dist/OSMBuildings/OSMBuildings.js', minify(code));

  taskArchive('dist/OSMBuildings/', `dist/OSMBuildings-${package.version}.zip`, () => {
    console.log(`done in ${((Date.now()-startTime)/1000).toFixed(3)}s`);
  });



  documentation.build(['src/index.js'], { 'sort-order': 'alpha' })
    .then(documentation.formats.json)
    .then(json => {
      const html = DocToHTML.convert(JSON.parse(json));
      fs.writeFileSync('docs/docs.html', html);
    });
});
