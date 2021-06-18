import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  template: `
  <form (ngSubmit)="enviar(f)" #f="ngForm">
    <div>
      <label>Entidad&emsp;</label>
      <input name="entidad" ngModel>
    </div>
    <div>
      <label>Sucursal&emsp;</label>
      <input name="sucursal" ngModel>
    </div>
    <div>
      <label>DC&emsp;</label>
      <input name="dc" ngModel>
    </div>
    <div>
      <label>Cuenta&emsp;</label>
      <input name="cuenta" ngModel>
    </div>
    <button>Enviar</button>
  </form>
  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviar(f: NgForm) {
    console.log(f);
  }

}
