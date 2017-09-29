import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // transform(value: string, args1: any, args2: any): string {

  // transform(value: string, ...args: any[]): string { // ultima version de angular

  transform(value: string, todas: boolean = true): string { // ultima version de angular
    value = value.toLowerCase();
    // CAPITALIZAR !
    // console.log(args1);
    // console.log(args2);

    /* ---METODO NICO
        console.log(args);
    
       
    
        let value1 = '';
        let caracter = '';
        let j = 0;
    
        for (let i = 0; i < value.length; i = i + 1) {
          if (value.charAt(i) !== ' ') {
            caracter = value.charAt(i);
            if (j === 0) {
              caracter = caracter.toUpperCase();
            }
            value1 = value1 + caracter;
            j = j + 1;
          } else {
            j = 0;
            value1 = value1 + ' ';
          }
    
        }
    
    
        return value1;*/

    const nombres = value.split(' '); // array
    if (todas) {
      // tslint:disable-next-line:forin
      for (const i in nombres) { // in, no of

        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' + ');
  }

}
