import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { CentroComponent } from './centro/centro.component';
import { CentrosComponent } from './centros/centros.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { FilaSolicitudComponent } from './fila-solicitud/fila-solicitud.component';
import { HttpClientModule } from '@angular/common/http';

let routes = [
  {path:'', component: SolicitudesComponent},
  {path:'centro/:centroId', component: CentroComponent},
  {path:'centros', component: CentrosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SolicitudesComponent,
    CentroComponent,
    CentrosComponent,
    SelectorCentroComponent,
    FilaSolicitudComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
