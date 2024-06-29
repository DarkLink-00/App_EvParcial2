import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarVideogameComponent } from './pages/agregar-videogame/agregar-videogame.component';
import { ListarVideogameComponent } from './pages/listar-videogame/listar-videogame.component';
import { EditarVideogameComponent } from './pages/editar-videogame/editar-videogame.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'agregar-videogame'},
  {path: 'agregar-videogame', component: AgregarVideogameComponent},
  {path: 'listar-videogame', component: ListarVideogameComponent},
  {path: 'editar-videogame', component: EditarVideogameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
