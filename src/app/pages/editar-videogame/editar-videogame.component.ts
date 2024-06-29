import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Videogame } from '../../models/videogame';
import { VideogameService } from '../../services/videogame.service';

@Component({
  selector: 'app-editar-videogame',
  templateUrl: './editar-videogame.component.html',
  styleUrl: './editar-videogame.component.css'
})
export class EditarVideogameComponent implements OnInit {

  //Propiedades:
  editarVideogameForm: FormGroup;
  enviado = false;
  videogameGenero: any = [
    'Terror', 'Shooter', 'Acción', 'Aventura', 'Estrategia', 'Destreza', 'Casino', 'Carreras', 'Deportes', 'Música', 'Simulación'
  ];
  videogameData : Videogame[];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private videogameService: VideogameService,
    private actRoute: ActivatedRoute
  ){}

  ngOnInit(): void { 
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getVideogame(id);
    this.editarVideogameForm = this.formBuilder.group({
      nombre: ['', [Validators.required]], 
      genero: ['', [Validators.required]], 
      costo: ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]
      ],
      autor: ['', [Validators.required]], 
      comentario: ['', [Validators.required]], 
    });
  }

  //Método para generar el formulario:
  mainForm() {
    this.editarVideogameForm = this.formBuilder.group({
      nombre: ['', [Validators.required]], 
      genero: ['', [Validators.required]], 
      costo: ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]
      ],
      autor: ['', [Validators.required]], 
      comentario: ['', [Validators.required]], 
    });
  }

  //Método para asignar el genero seleccionado
  actualizarGenero(d) {
    this.editarVideogameForm.get('categoria').setValue(d,{
      onlySelf: true
    });
  }

  //Getter para acceder a los controles del formulario
  get myForm() {
    return this.editarVideogameForm.controls;
  }

  //método para buscar al empleado que vamos a modificar
  getVideogame(id){
    this.videogameService.getVidegame(id)
    .subscribe((data) => {
      this.editarVideogameForm.setValue({
        nombre: data['nombre'],
        genero: data['genero'],
        costo: data['costo'],
        autor: data['autor'],
        comentario: data['comentario']
      });
    });
  }

  //método para enviar el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.editarVideogameForm.valid) {
      return false;
    }
    else {
      if(window.confirm('¿Estás seguro que lo deseas modificar?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.videogameService.updateVideogame(id, this.editarVideogameForm.value)
        .subscribe({
          complete: () => {
            this.router.navigateByUrl('/listar-videogame');
            console.log('Se actualizó correctamente');
          },
          error: (e) => {
            console.log(e);
          }
        });
      }
    }
  }  

}
