import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [DialogConfirmacionComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [DialogConfirmacionComponent
    
  ]
})
export class DialogModule { }
