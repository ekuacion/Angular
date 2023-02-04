import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({                              // Decorador
  
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-top: 5px;
    }
  `]
})

export class PorRegionComponent {         // Clase

  // Variables 
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  hayError  : boolean = false;
  paises: Country[] = [];

  // Iniciando servicio en el constructor
  constructor(private paisService: PaisService) { }
  
  // Metodo para cambios de stylos
  getClaseCSS(region: string){
    return (region === this.regionActiva) 
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  // Activando la selección de la region y buqueda
  activarRegion(region: string) {

    this.hayError = false;
    this.regionActiva = region;
    // this.paises = [];
    // llamando al servicio
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (resp) => {
      console.log(resp);   
      console.log(this.paises);
      this.paises = resp;

      
      
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

}
