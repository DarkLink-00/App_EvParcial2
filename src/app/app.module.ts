import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarVideogameComponent } from './pages/agregar-videogame/agregar-videogame.component';
import { EditarVideogameComponent } from './pages/editar-videogame/editar-videogame.component';
import { ListarVideogameComponent } from './pages/listar-videogame/listar-videogame.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarVideogameComponent,
    EditarVideogameComponent,
    ListarVideogameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
