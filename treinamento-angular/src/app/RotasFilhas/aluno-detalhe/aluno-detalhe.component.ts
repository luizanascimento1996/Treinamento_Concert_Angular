import { AlunosServiceService } from './../alunos-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit {
  aluno: any;
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private alunosService: AlunosServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarAluno() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
