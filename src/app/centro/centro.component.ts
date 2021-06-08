import { Component, OnInit } from '@angular/core';

let centro = {
  nombre : "HOSPITAL MEDINA DEL CAMPO",
  direccion: "C/ Peñaranda nº 24, MEDINA DEL CAMPO",
  telefono: "983 83 80 00"
};

@Component({
  selector: 'app-centro',
  template: `
  <h2>Centro seleccionado</h2>
  <p>Nombre: ${centro.nombre}</p>
  <p>Dirección: ${centro.direccion}</p>
  <p>Tlfno: ${centro.telefono}</p>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
