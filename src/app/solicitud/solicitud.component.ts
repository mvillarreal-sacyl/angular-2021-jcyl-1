import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "", apellidos: ""};
  invalido: boolean = true;


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

  enviar(saludo: string) {
    console.log("Hola " + saludo + "!");
    console.log(this.solicitud.nombre);
  }

  delete() {
    console.clear();
    console.log('eliminar!');
    }
}
