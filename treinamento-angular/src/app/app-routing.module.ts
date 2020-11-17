import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Rotas/login/login.component';
import { RotasCursosComponent } from './Rotas/rotas-cursos/rotas-cursos.component';
import { HomeComponent } from './Rotas/home/home.component';
import { CursoDetalheComponent } from './Rotas/rotas-cursos/curso-detalhe/curso-detalhe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cursos',
    component: RotasCursosComponent,
  },
  {
    path: 'curso/:id',
    component: CursoDetalheComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
