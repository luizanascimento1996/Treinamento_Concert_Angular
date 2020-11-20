import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private _router: Router) {}

  fazLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '1234') {
      this.usuarioAutenticado = true;
      this._router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
