import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService2 {
  constructor() {
    console.log('Cursos Service');
  }

  getCursos() {
    return ['Angular', 'JAVA', 'C#', 'Python'];
  }
}
