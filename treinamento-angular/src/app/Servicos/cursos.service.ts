import { EventEmitter, Injectable } from '@angular/core';

import { LogServiceService } from './../shared/log-service.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService2 {
  emitirCursoCriado = new EventEmitter<string>();
  private _cursos: string[] = ['Angular', 'JAVA', 'C#', 'Python'];

  constructor(private _logService: LogServiceService) {
    console.log('Cursos Service');
  }

  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this._cursos;
  }

  addCurso(curso: string) {
    this._logService.consoleLog(`Criando um curso ${curso}`);
    this._cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
