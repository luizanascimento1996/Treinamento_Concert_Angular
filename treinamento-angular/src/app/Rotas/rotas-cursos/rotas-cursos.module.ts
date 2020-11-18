import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { RotasCursosComponent } from './rotas-cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { RotasCursoSService } from './rotas-curso-s.service';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    RotasCursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent,
  ],
  imports: [CommonModule, MatListModule],
  exports: [
    RotasCursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent,
  ],
  providers: [RotasCursoSService],
})
export class RotasCursosModule {}
