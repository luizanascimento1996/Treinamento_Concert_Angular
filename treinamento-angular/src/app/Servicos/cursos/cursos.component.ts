import { Component, OnInit } from '@angular/core';

import { CursosService2 } from '../cursos.service';

@Component({
  selector: 'app-cursos-service',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private _cursosService: CursosService2) {
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }
}
