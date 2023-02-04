import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class heroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 45;
    // get simula una propiedad procesada
    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }
    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 30;
    }
}
