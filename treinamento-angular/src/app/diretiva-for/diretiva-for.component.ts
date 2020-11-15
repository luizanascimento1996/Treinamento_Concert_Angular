import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.scss'],
})
export class DiretivaForComponent implements OnInit {
  cursos: string[] = ['Angular', 'C#', 'Java'];

  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < this.cursos.length; index++) {
      let curso = this.cursos[index];
    }
  }
}
