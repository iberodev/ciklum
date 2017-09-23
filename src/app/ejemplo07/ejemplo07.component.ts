import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e7',
  templateUrl: './ejemplo07.component.html',
  styleUrls: ['./ejemplo07.component.css']
})
export class Ejemplo07Component implements OnInit {

  numeros: number[];
  frutas: string[];
  constructor() { 
    this.numeros = [3,5,6,7,3,6,7,33,7,4,3267,765,76];
    this.frutas = ["platano", "manzana", "kiwi", "chorizo"];
  }

  ngOnInit() {
  }

}
