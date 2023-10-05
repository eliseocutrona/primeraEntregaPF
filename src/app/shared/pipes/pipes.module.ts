import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { ControlErrorMessagesPipe } from './control-error-messages.pipe';



@NgModule({
  declarations: [
    NombreCompletoPipe,
    ControlErrorMessagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NombreCompletoPipe,
    ControlErrorMessagesPipe
  ]
})
export class PipesModule { }
