import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmacion',
  templateUrl: './dialog-confirmacion.component.html',
  styleUrls: ['./dialog-confirmacion.component.scss']
})
export class DialogConfirmacionComponent {
  message: string = "Está seguro que desea eliminar el registro?"
  confirmButtonText = "Aceptar"
  cancelButtonText = "Cancelar"
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogConfirmacionComponent>) {
      if(data){
          this.message = data.message || this.message;
          if (data.buttonText) {
              this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
              this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          }
      }
  }

  onConfirmClick(): void {
      this.dialogRef.close(true);
  }
}
