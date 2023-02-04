import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevo:Personaje = {
    nombre: 'Maestroroshi',
    poder: 1000
  }
   constructor(private dbzService:dbzService) {}

}
