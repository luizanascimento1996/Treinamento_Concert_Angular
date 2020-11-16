import { Component, OnInit } from '@angular/core';
import { CursosService2 } from '../cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
})
export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];

  constructor(private _cursosService: CursosService2) {}

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosService.addCurso(curso);
  }
}
