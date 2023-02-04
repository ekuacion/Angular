/*  ===== Encadenamiento opcional ===== */
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
}
// Agregar el ? a la variable, evalua solo si hay hijos
function imprimirHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
imprimirHijos(pasajero2);