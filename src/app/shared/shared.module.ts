import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { DialogConfirmacionComponent } from './dialog/dialog-confirmacion/dialog-confirmacion.component';
import { DialogModule } from './dialog/dialog/dialog.module';



@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesModule,
    PipesModule,
    DialogModule
  ]
})
export class SharedModule { }
