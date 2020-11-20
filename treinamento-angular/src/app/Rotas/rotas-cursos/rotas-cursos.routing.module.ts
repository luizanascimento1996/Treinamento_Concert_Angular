import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from '../home/home.component';
//import { LoginComponent } from '../login/login.component';

import { RotasCursosComponent } from './rotas-cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const rotasCursosRoutes: Routes = [
  {
    path: 'cursos',
    component: RotasCursosComponent,
  },
  {
    path: 'naoEncontrado',
    component: CursoNaoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rotasCursosRoutes)],
  exports: [RouterModule],
})
export class RotasCursosRoutingModule {}
