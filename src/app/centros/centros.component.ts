import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  template: `
  <div *ngFor="let centroIterado of centros">
   <app-centro [centro]="centroIterado"></app-centro>
 </div>
  `,
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  centros : Centro[] = [
    {nombre: "Hospital Medina del Campo"},
    {nombre: "Hospital Clínico Universitario Valladolid"},
    {nombre: "Hospital Río Hortega"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export class Centro {
  nombre : string = ''
}
