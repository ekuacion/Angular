/*  ===== Desestructuracion de Argumentos ===== */
// Creando Interfaces
export interface Producto {
    desc: string;
    precio: number
}
// Creando Elementos
const telefono: Producto = {
    desc: 'iPad Air',
    precio: 150
}
const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

// Calcular impuesto sobre venta
export function calculaISV(productos: Producto[]):[number,number] {
    let total = 0; // es let ya que el valor cambiara
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);
console.log('Total:', total);
console.log('ISV:', isv);