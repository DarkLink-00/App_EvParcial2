import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../../services/videogame.service';

@Component({
  selector: 'app-listar-videogame',
  templateUrl: './listar-videogame.component.html',
  styleUrl: './listar-videogame.component.css'
})
export class ListarVideogameComponent implements OnInit {

  //Propiedades
  videogames:any = [];

  constructor(private videogameService: VideogameService){
    this.getVideogames();
  }

  ngOnInit(): void {
  }

  //método para obtener a los empleados
  getVideogames(){
    this.videogameService.getVideogames()
      .subscribe((data) => {
        this.videogames = data;
      })
  }

  //método para eliminar un empleado
  eliminarVideogame(videogame, index){
    if(window.confirm('¿Estás seguro que lo deseas eliminar?')){
      this.videogameService.deleteVideogame(videogame._id)
        .subscribe((data) => {
          this.videogames.splice(index, 1);
        })
    }
  }
}
