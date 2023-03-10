import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  @Input() pais: Country[] = [];

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
  
    /* this.activateRoute.params
      .subscribe( ({id}) => {
        console.log(id);
        this.PaisService.getPaisPorAlpha(id).subscribe( pais => {
          console.log(pais);
        });

      }); */
    this.activateRoute.params
      .pipe(
        
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
        
      )        
      .subscribe( pais => {
        
        this.pais = pais
      });
  }

}
