import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  nome: string = 'Luiza Nascimento e Silva';
  cursoAngular = true;
  urlImage =
    'https://i.picsum.photos/id/980/400/200.jpg?hmac=9-zpSqiyyseLFp_GvE-Ayrh7oEPif4JaKd42TbczZ10';

  constructor() {}

  ngOnInit(): void {}

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Clicou');
  }
}
