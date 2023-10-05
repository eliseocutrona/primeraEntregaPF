import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss'],
})
export class AbmAlumnosComponent {
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(60),
  ]);
  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(60),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  numeroDocumentoControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(2),
    Validators.pattern(/^[0-9]\d*$/)
  ]);

  alumnosForms = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    numeroDocumento: this.numeroDocumentoControl,
  });
  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}

  guardar(): void {
    if (this.alumnosForms.valid) {
      console.log('valido');
      this.dialogRef.close(this.alumnosForms.value);
    } else {
      console.log('invalido');
      this.alumnosForms.markAllAsTouched();
    }
  }
}
