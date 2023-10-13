import { Component } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboardComponent {
  authUser: Usuario | null = null;

  suscripcionAuthUser: Subscription | null = null;

  destroyed$ = new Subject<void>();


  constructor(private authService: AuthService) {

    this.authService.obtenerUsuarioAutenticado()
      .pipe(
        // tomar hasta ... que este destruido
        takeUntil(this.destroyed$)
      )
      .subscribe((usuario) => this.authUser = usuario);
  }

  ngOnDestroy(): void {
    // this.suscripcionAuthUser?.unsubscribe();
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

