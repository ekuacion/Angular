/*  ===== Decoradores de clase ===== */
// Sirven para cambiar las clases en momentos que esten definidas
// Sirven par añadir funiones o p'ropiedades a las clases
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'AC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);
const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);