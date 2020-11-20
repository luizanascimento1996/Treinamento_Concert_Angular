import { Component } from '@angular/core';
import { AuthService } from './Rotas/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  valor = 5;
  deletarCiclo = false;
  mostrarMenu: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo(): void {
    this.deletarCiclo = true;
  }
}
