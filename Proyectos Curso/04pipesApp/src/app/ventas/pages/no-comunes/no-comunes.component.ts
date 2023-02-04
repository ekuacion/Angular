import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nselect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Pedro','Hernando','Claudio'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  heroes = [
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(2000);  // 0,1,2,3,4,5,6,7,8,9
  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
