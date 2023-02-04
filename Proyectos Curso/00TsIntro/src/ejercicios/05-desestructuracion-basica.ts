/*  ===== Desestructuracion de Objetos ===== */
// creando Interfaces
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}
interface Detalles {
    autor: string;
    anio: number
}
// creando reproductor
const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
const autor = 'Fulano';
// Desestructuracion es sacar directamente las variables y crear propiedades constantes
const {volumen: vol, segundo, cancion, detalles} = reproductor;
// const {volumen, segundo, cancion, detalles:{autor}} = reproductor;
const {autor:autorDetalle , anio} = detalles; // Mejor ocupar esta forma
//console.log('El volumen actual es de:', vol)
//console.log('El segundo actual es de:', segundo)
//console.log('La canción actual es de:', cancion)
//console.log('El autor es:', autor)
const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [p1, p2, p3] = dbz;
//const [, , p3] = dbz; con esta forma no creamos todas las variables

console.log('Personaje 1:', p1);
console.log('Personaje 1:', p2);
console.log('Personaje 1:', p3);