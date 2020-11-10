import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  nome: string;

  cursos: string[] = ['JAVA', 'Ext JS', 'Angular', 'C#'];

  constructor() {
    this.nome = 'Lista';

    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

  ngOnInit(): void {}
}
