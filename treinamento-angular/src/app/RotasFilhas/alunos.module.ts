import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AlunosComponent } from './alunos/alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosServiceService } from './alunos-service.service';

import { AlunosRoutingModule } from './alunos.routing.module';

@NgModule({
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [],
  providers: [AlunosServiceService],
})
export class AlunoModule {}
