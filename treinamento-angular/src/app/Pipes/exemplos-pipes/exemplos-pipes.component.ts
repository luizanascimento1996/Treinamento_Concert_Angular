import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 3.7,
    numeroPaginas: 428,
    preco: 118.99,
    dataLancamento: new Date(2018, 4, 30),
    url:
      'https://www.amazon.com.br/Learning-JavaScript-Data-Structures-Algorithms-ebook/dp/B077NB5H6Y/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=loiane+groner&qid=1605546229&sr=8-2',
  };

  constructor() {}

  ngOnInit(): void {}
}
