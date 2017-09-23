import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e5',
  templateUrl: './ejemplo05.component.html',
  styleUrls: ['./ejemplo05.component.css']
})
export class Ejemplo05Component implements OnInit {

  palabra: string = "valor defecto";

  constructor() { }

  ngOnInit() {
  }

  actualizaPalabra(valor: string): void {
     this.palabra = valor;
  }

  reset(): void {
    this.palabra = "";
  }

}
