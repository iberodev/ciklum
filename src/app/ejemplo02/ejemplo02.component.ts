import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2',
  templateUrl: './ejemplo02.component.html',
  styleUrls: ['./ejemplo02.component.css']
})
export class Ejemplo02Component implements OnInit {

  x: number;
  palabra: string;
  empleado: object;

  constructor() { }

  ngOnInit() {
    this.x = 25;
    this.palabra = "meetup";
    this.empleado = {
      name: "Alan",
      lastName: "Doe",
      position: "full-stak developer",
      salary: 2500
    };
  }

}
