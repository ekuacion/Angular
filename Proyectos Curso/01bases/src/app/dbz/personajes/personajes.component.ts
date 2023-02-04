import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes() {
    return this.sbzService.personajes;
  }

  constructor(private sbzService: dbzService){

  }
}
