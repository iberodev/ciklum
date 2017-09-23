import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e4',
  templateUrl: './ejemplo04.component.html',
  styleUrls: ['./ejemplo04.component.css']
})
export class Ejemplo04Component implements OnInit {

  n: number;
  constructor() { }

  ngOnInit() {
    this.generate();
  }

  generate(): void {
    debugger;
    this.n = Math.floor(Math.random() * 10);
  }

  increase(): void {
    this.n++;
  }

  decrease(): void {
    this.n--;
  }

}
