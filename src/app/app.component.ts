import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = 'nicolas';
  nombre2 = 'nicolas aRon bLoJ';
  arreglo: string[] = ['NICOLAS', 'PEDRO', 'JUAN', 'JORGE'];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'logan',
    edad: 500,
    direccion: {
      calle: 'calle av 123',
      casa: ' numero 2'
    }
  };

  valorDePromesa = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve('LLEGO LA DATA'),
        3500
      );
    }
  );


// fecha = '2017-01-01'
 fecha = new Date();


}
