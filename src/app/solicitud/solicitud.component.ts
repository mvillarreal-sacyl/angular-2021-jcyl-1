import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "Javier", apellidos: "Gamarra"};

  ngOnInit(): void {
  }

  actualizarNombre($event: KeyboardEvent) {
    const nombre = $event.target as HTMLInputElement;
    this.solicitud.nombre = nombre.value;
  }

  actualizarApellidos($event: KeyboardEvent) {
    const apellidos = $event.target as HTMLInputElement;
    this.solicitud.apellidos = apellidos.value;
  }

  enviar() {
    console.log(this.solicitud);
  }

  eliminar() {
    this.solicitud.nombre = "";
    this.solicitud.apellidos = "";
  }

  getDisabled() {
    return this.solicitud.nombre.length < 3 || this.solicitud.apellidos.length < 5
  }

}
