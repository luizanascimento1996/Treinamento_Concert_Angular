import { Component, OnInit } from '@angular/core';

import { AlunosServiceService } from './../alunos-service.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private _alunosService: AlunosServiceService) {}

  ngOnInit(): void {
    this.alunos = this._alunosService.getAlunos();
  }
}
