/*  ===== Clases basicas ===== */
// private solo visible dentro de la clase
// public desde afuera de la clase
// static puedo acceder sin crear una instancia 
class PersonaNormal {
    constructor(
    public nombre: string,
    public direccion: string,
    ) {}
}
// Extendiendo una clase
class Heroe extends PersonaNormal {
    constructor(
        public alterEgo:string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, 'New York');        
    }

}

const ironman = new Heroe('Ironman', 45, 'Tony');           // Creando una instancia de la clase
console.log(ironman);                                       // Imprimiendo por consola 
