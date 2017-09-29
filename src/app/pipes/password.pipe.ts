import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'password'
})
export class PasswordPipe implements PipeTransform {

    public transform(nombre: string, activar: boolean = true): string {

        const nombres = nombre.split('');

        if (activar) {
            // tslint:disable-next-line:forin
            for (const i in nombres) {
                console.log(nombres[i]);
                nombres[i] = '*';
                // salida += '*'
            }
        }

        return nombres.join('');
    }
}
