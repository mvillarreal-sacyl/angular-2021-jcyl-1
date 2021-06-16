import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';
import { SelectorCentroComponent } from '../selector-centro/selector-centro.component';
import { FilaSolicitudComponent } from '../fila-solicitud/fila-solicitud.component';



@NgModule({
  declarations: [
    SolicitudesComponent,
    SelectorCentroComponent,
    FilaSolicitudComponent
  ],
  exports: [
    SolicitudesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SolicitudModule { }
