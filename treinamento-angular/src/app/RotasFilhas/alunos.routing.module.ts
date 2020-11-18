import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos/alunos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


//escrever url http://localhost:4200/alunos/novo, para ver o pai e filho funcionando
const alunosRoutes: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      {
        path: 'novo',
        component: AlunoFormComponent,
      },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
