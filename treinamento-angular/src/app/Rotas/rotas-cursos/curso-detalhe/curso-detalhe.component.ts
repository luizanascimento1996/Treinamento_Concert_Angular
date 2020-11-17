import { RotasCursoSService } from '../rotas-curso-s.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cursosService: RotasCursoSService
  ) {
    //this.id = this._route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this._cursosService.getCurso(this.id);

      if (this.curso == null) {
        this._router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }
}
