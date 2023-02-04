import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top:20px;
    margin-bottom:20px;
    height: 94%;
    align-content: space-between;
  }    
  `]
})
export class HeroeTarjetaComponent  {
  
  @Input() heroe!: Heroe;

}
