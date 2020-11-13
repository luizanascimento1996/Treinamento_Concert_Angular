import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosBootstrapRoutingModule } from './cursos-bootstrap-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [CursosListaComponent],
  imports: [
    CommonModule,
    CursosBootstrapRoutingModule
  ]
})
export class CursosBootstrapModule { }
