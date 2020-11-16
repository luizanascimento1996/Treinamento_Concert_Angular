import { Directive, ElementRef, Renderer2 } from '@angular/core';

//Recomendável não usar o ElementRef, mas o Renderer no lugar.

@Directive({
  selector: 'h1[appFundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
