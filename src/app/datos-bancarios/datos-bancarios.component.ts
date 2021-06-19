import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';

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

    <div *ngIf="formGroup.invalid">
      <p>{{formGroup.controls['sucursal'].errors | json}}</p>
      <p>{{formGroup.controls['cuenta'].errors | json}}</p>
    </div>
    <button [disabled]="formGroup.invalid" (click)="enviar()">Enviar</button>
  </form>
  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  formGroup: FormGroup;
  sucursalGroup = new FormControl('0000', [Validators.required, this.myValidadorSucursal]);
  cuentaGroup = new FormControl('0000000000', [Validators.required, this.myValidadorCuenta]);

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(
      {
        entidad: new FormControl(""),
        sucursal: this.sucursalGroup,
        dc: '',
        cuenta: this.cuentaGroup
      }
    );
    this.sucursalGroup.valueChanges.subscribe(x => console.log('Sucursal: ' + x));
    this.cuentaGroup.valueChanges.subscribe(x => console.log('Num Cuenta: ' + x));
  }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.formGroup);
  }

  myValidadorSucursal(formControl: FormControl) {
    return formControl.value === '0000' ? { error: 'Sucursal incorrecta, 0000 no existe' } : {true: 'OK'};
  }

  myValidadorCuenta(formControl: FormControl) {
    return isNaN(formControl.value) ? { error: 'Número de cuenta incorrecto. Formato no válido'} : null;
  }
}
