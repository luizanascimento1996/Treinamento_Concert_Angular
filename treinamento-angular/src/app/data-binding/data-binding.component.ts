import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.scss'],
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `,
  ],
})
export class DataBindingComponent implements OnInit {
  nome: string = '';
  cursoAngular = true;
  urlImage =
    'https://i.picsum.photos/id/980/400/200.jpg?hmac=9-zpSqiyyseLFp_GvE-Ayrh7oEPif4JaKd42TbczZ10';

  pessoa: any = {
    nome: 'taerrado',
    idade: 20,
  };

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

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

  onKeyUp(event) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = event.target.value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
