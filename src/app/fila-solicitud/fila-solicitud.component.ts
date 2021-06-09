import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `
  <div style="color: blue">{{solicitud.nombre}} {{solicitud.apellidos}}
  <button (click)="eliminar()">Eliminar</button>
</div>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  @Input()
  solicitud: any;

  @Output()
  solicitudEliminada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar() {
    this.solicitudEliminada.emit(this.solicitud);

  }

}
