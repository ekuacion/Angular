/*  ===== Código de TypeScript ===== */

let habilidades: string[] = ['Bash','Counter','Healing']; 
// habilidades.push() codigo para integrar elementos 
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}
personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje); // Imprime valores en una tabla