import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VistacuadriculaComponent } from './components/vistacuadricula/vistacuadricula.component';
import { VistalistaComponent } from './components/vistalista/vistalista.component';
import { VihomeComponent } from './components/vihome/vihome.component';

// Importar rutas
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    VistacuadriculaComponent,
    VistalistaComponent,
    VihomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
