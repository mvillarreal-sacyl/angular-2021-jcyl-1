import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  template: `
  <form [formGroup]="formGroup">
    <div>
      <label>Entidad&emsp;</label>
      <input name="entidad" required minlength="4" maxlength="4" size="4" formControlName="entidad">
    </div>
    <div>
      <label>Sucursal&emsp;</label>
      <input name="sucursal" required minlength="4" maxlength="4" size="4" formControlName="sucursal">
    </div>
    <div>
      <label>DC&emsp;</label>
      <input name="dc" required minlength="2" maxlength="2" size="2" formControlName="dc">
    </div>
    <div>
      <label>Cuenta&emsp;</label>
      <input name="cuenta" required minlength="10" maxlength="10" size="10" formControlName="cuenta">
    </div>
    <button [disabled]="formGroup.invalid" (click)="enviar()">Enviar</button>
  </form>
  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(
      {entidad: new FormControl(""), sucursal: '0000', dc: '', cuenta:''}
    )
  }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.formGroup);
  }

}
