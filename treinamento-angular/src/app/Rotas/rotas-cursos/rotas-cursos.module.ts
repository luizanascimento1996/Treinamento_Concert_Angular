import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { RotasCursosComponent } from './rotas-cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { RotasCursoSService } from './rotas-curso-s.service';

import { RotasCursosRoutingModule } from './rotas-cursos.routing.module';

@NgModule({
  declarations: [
    RotasCursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent,
  ],
  imports: [CommonModule, MatListModule, RotasCursosRoutingModule],
  exports: [
    RotasCursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent,
  ],
  providers: [RotasCursoSService],
})
export class RotasCursosModule {}
