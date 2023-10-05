import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    if (!error) return '';

    let defaultMsg = 'Error desconocido';
    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: `Este campo debe tener al menos ${error.value.requiredLength} caracteres`,
      email: 'El valor debe ser un e-mail valido',
      maxlength: '..',
      min: 'Debe ser mayor a ...',
      max: '',
      pattern : 'Solo se permiten valores numéricos'
    }

    if (opciones[error.key]) {
      defaultMsg = opciones[error.key]
    }
    return defaultMsg;
  }

}
