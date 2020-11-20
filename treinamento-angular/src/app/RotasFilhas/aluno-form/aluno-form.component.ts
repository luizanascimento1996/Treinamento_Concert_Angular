import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosServiceService } from '../alunos-service.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements OnInit {
  aluno: any = {};
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private alunosService: AlunosServiceService
  ) {}

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }
}
