import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','Ironman','Thor','Capitan America'];
  heroesBorrados: string = '';

  borrarHeroe(): void {
    this.heroesBorrados = this.heroes.shift() || '';
  }

}
