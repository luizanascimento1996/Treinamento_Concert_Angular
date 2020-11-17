import { RotasCursoSService } from './rotas-curso-s.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rotas-cursos',
  templateUrl: './rotas-cursos.component.html',
  styleUrls: ['./rotas-cursos.component.scss'],
})
export class RotasCursosComponent implements OnInit {
  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private _rotasCursosService: RotasCursoSService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cursos = this._rotasCursosService.getCursos();
    this.inscricao = this._route.queryParamMap.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }
}
