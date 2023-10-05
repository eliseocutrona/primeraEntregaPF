import { Pipe, PipeTransform } from '@angular/core';
import { alumnos } from '../../pages/alumnos/alumnos.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: alumnos, ...args: unknown[]): unknown {
    return value.apellido + ', ' + value.nombre;
  }

}
