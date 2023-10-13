import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './AuthService';



@NgModule({
  declarations: [],
  providers: [AuthService],
  imports: [
    CommonModule,    
  ],
  //exports: [ServicesModule]
})
export class ServicesModule { }
