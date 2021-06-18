import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  template: `
  <form (ngSubmit)="enviar(f)" #f="ngForm">
    <div>
      <label>Entidad&emsp;</label>
      <input name="entidad" ngModel required minlength="4" maxlength="4" size="4">
    </div>
    <div>
      <label>Sucursal&emsp;</label>
      <input name="sucursal" ngModel required minlength="4" maxlength="4" size="4">
    </div>
    <div>
      <label>DC&emsp;</label>
      <input name="dc" ngModel required minlength="2" maxlength="2" size="2">
    </div>
    <div>
      <label>Cuenta&emsp;</label>
      <input name="cuenta" ngModel required minlength="10" maxlength="10" size="10">
    </div>
    <button [disabled]="f.invalid">Enviar</button>
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
    if (f.controls.entidad.errors) {
      console.log("Error en la entidad: " + f.controls.entidad.errors);
    }
    if (f.controls.sucursal.errors) {
      console.log("Error en la sucursal: " + f.controls.sucursal.errors);
    }
    if (f.controls.dc.errors) {
      console.log("Error en el dígito de control: " + f.controls.dc.errors);
    }
    if (f.controls.cuenta.errors) {
      console.log("Error en el nº de cuenta: " + f.controls.cuenta.errors);
    }
  }

}
