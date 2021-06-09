import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { CentroComponent } from './centro/centro.component';
import { CentrosComponent } from './centros/centros.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudesComponent,
    CentroComponent,
    CentrosComponent,
    SelectorCentroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
