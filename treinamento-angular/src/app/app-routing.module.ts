import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Rotas/home/home.component';
import { LoginComponent } from './Rotas/login/login.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./Rotas/rotas-cursos/rotas-cursos.module').then(
        (mod) => mod.RotasCursosModule
      ),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
