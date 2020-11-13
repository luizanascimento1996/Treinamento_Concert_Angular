import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  templateUrl: './diretiva-if.component.html',
  styleUrls: ['./diretiva-if.component.scss'],
})
export class DiretivaIfComponent implements OnInit {
  cursos: string[] = ['Angular 2'];

  mostrarCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
