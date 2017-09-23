import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e8',
  templateUrl: './ejemplo08.component.html',
  styleUrls: ['./ejemplo08.component.css']
})
export class Ejemplo08Component implements OnInit {

  fruta: string;
  numero: number;
  numeros: number[];
  frutas: string[];
  constructor() { 
    this.numeros = [3,5,6,7,3,6,7,33,7,4,3267,765,76];
    this.frutas = ["platano", "manzana", "kiwi", "chorizo"];
  }

  ngOnInit() {
  }

  insertaFruta(): void {
    this.frutas.push(this.fruta);
    this.fruta = null;
  }

  insertaNumero(): void {
    this.numeros.push(this.numero);
    this.numero = null;
  }

}
