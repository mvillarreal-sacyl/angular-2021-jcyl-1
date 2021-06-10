import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor() { }

  getSolicitudes() {
    return [
      {id:0, nombre: "Javier", apellidos: "Gamarra"},
      {id:1, nombre: "Manuel", apellidos: "Villarreal"},
      {id:2, nombre: "Dua", apellidos: "Lipa"},
      {id:3, nombre: "Phil", apellidos: "Collins"},
      {id:4, nombre: "Shola", apellidos: "Ama"},
      {id:4, nombre: "Toni", apellidos: "Braxton"},
      {id:5, nombre: "Steven", apellidos: "Tyler"}];
  }
}
