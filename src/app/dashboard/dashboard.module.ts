import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { dashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AlumnosModule } from '../pages/alumnos/alumnos.module';
import { LoginModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    dashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AlumnosModule,
    LoginModule
  ],
  exports : [
    dashboardComponent
  ] 
})
export class dashboardModule { 

}
