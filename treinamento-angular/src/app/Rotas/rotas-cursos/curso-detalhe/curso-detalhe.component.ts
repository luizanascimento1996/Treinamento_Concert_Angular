import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit {
  id: string;

  constructor(private _route: ActivatedRoute) {
    this.id = this._route.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
