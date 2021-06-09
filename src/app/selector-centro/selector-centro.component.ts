import { Component, OnInit, Output } from '@angular/core';
import { Centro } from '../centros/centros.component';

@Component({
  selector: 'app-selector-centro',
  template: `
  <input (keyup)="buscarCentro($event)" [value]="centroSeleccionado.nombre">

  <div *ngFor="let centro of centrosFiltrados">
  <p (click)="seleccionarCentro(centro)" style="color:blue"><u>{{centro.nombre}}</u></p>
    </div>
  `,
  styleUrls: ['./selector-centro.component.css']
})

export class SelectorCentroComponent implements OnInit {

  centros: Centro[] = [{nombre: "Ponce de León"}, {nombre: "San Agustín"}];
  centrosFiltrados: Centro[] = [];

  @Output()
  centroSeleccionado: Centro = {nombre: ''};

  constructor() { }

  ngOnInit(): void {
  }

  buscarCentro($event: KeyboardEvent) {
    let target = $event.target as HTMLInputElement;
    this.centrosFiltrados = this.centros.filter(centro => centro.nombre?.toLocaleLowerCase().includes((target.value.toLocaleLowerCase())));
  }

  seleccionarCentro(centro: Centro) {
    this.centroSeleccionado = centro;
  }

}
