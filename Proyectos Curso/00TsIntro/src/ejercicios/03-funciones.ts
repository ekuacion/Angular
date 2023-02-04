/*  ===== Clase de Funciones basicas ===== */
// Es necesario definir que retornara 
function sumar(a:number, b:number): number {
    return (a + b);
}
// Otra forma de escribir la misma duncion 
const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}
// Funcion multiplicar 
function multiplicar(numero:number, otroNumero?:number, base:number=2):number{
    return numero*base;
}
/*
const resultado = sumar(10,20);
const resultado2 = sumarFlecha(5,10);
const resultadom1 = multiplicar(5,10);
const resultadom2 = multiplicar(5,0,10);

console.log(resultado);
console.log(resultado2);
console.log(resultadom1);
console.log(resultadom2);
*/
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}
// Curar personaje, void se utiliza para que no retorne nada
function curar(personaje: PersonajeLOR, curarX:number): void{
    personaje.pv += curarX;
    console.log(personaje);
}
// Creando nuevo personaje
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv)
    }
}
// Utilizando la funcion curar
curar(nuevoPersonaje,20);