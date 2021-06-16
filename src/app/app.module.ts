import { SolicitudModule } from './solicitud/solicitud.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import { CentrosComponent } from './centros/centros.component';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

let routes = [
  {path:'', component: SolicitudesComponent},
  {path:'centro/:centroId', component: CentroComponent},
  {path:'centros', component: CentrosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
     CentroComponent,
    CentrosComponent
  ],
  imports: [
    SolicitudModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
