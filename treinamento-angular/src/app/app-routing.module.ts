import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Rotas/home/home.component';
import { LoginComponent } from './Rotas/login/login.component';
import { AuthGuard } from './Rotas/guard/auth.guard';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./Rotas/rotas-cursos/rotas-cursos.module').then(
        (mod) => mod.RotasCursosModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
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
