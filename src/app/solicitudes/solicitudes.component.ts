import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  solicitud = {nombre: "Javier", apellidos: "Gamarra"};
  solicitudes = [
    {id:0, nombre: "Javier", apellidos: "Gamarra"},
    {id:1, nombre: "Manuel", apellidos: "Villarreal"},
    {id:2, nombre: "Toni", apellidos: "Braxton"},
    {id:3, nombre: "Phil", apellidos: "Collins"},
    {id:4, nombre: "Sade", apellidos: "Adu"},
    {id:5, nombre: "Steven", apellidos: "Tyler"}];

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


  eliminar(solicitud : any) {
    this.solicitudes = this.solicitudes.filter(x => x.id != solicitud.id)

  }
  getDisabled() {
    return this.solicitud.nombre.length < 3 || this.solicitud.apellidos.length < 5
  }

}
