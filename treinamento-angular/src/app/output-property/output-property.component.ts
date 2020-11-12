import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() value = 0;

  constructor() {}

  ngOnInit(): void {}

  incremental() {
    this.value++;
  }
  decremental() {
    this.value--;
  }
}
