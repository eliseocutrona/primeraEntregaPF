import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, fromEvent,map } from 'rxjs';
import { Usuario } from 'src/app/interfaces/Usuario';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoggedIn = new Subject<Usuario>();

  contrasenaControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
  ]);
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
  ]);

  authForm = new FormGroup({
    contraseña: this.contrasenaControl,
    nombre: this.nombreControl,
  });

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(map((ev) => ev.clientX));

    positions.subscribe((x) => console.log(x));
  }
  login(): void {
    this.authService.login({
      ...(this.authForm.value as any),
    });

    const obtenerUsuario = new Promise((resolve, reject) => {
      if (this.nombreControl.value == 'Eliseo') {
        resolve('Usuario admin');
      } else {
        reject('Otro usuario');
      }
    });
    obtenerUsuario.then(
      function () {
        console.log('Se logueo el usuario administrador');
      },
      function () {
        console.log('Se logueo un otro usuario');
      }
    );
  }
  ngOnDestroy(): void {
    // this.suscripcionAuthUser?.unsubscribe();
    this.isLoggedIn.complete();
  }
}
