import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private _router: Router) {}

  fazLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '1234') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this._router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
