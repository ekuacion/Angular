/*  ===== Tarea ===== */
// Interfaces del objeto 
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => void;
}
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}
// Creando objeto 
const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion():string {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}
// Creando Variable
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);