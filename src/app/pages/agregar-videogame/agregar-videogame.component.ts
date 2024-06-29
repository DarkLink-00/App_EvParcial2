import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideogameService } from '../../services/videogame.service';

@Component({
  selector: 'app-agregar-videogame',
  templateUrl: './agregar-videogame.component.html',
  styleUrl: './agregar-videogame.component.css'
})
export class AgregarVideogameComponent implements OnInit {

  //Propiedades:
  videogameForm: FormGroup;
  enviado = false;
  videogameGenero: any = [
    'Terror', 'Shooter', 'Acción', 'Aventura', 'Estrategia', 'Destreza', 'Casino', 'Carreras', 'Deportes', 'Música', 'Simulación'
  ];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private videogameService: VideogameService
  ){
    this.mainForm();
  }
  
  ngOnInit(): void {
  }

  //Método para generar el formulario:
  mainForm() {
    this.videogameForm = this.formBuilder.group({
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
    this.videogameForm.get('genero').setValue(d,{
      onlySelf: true
    });
  }

  //Getter para acceder a los controles del formulario
  get myForm() {
    return this.videogameForm.controls;
  }

  //Método para enviar el formulario
  onSubmit() {
    this.enviado = true;
    if(!this.videogameForm.valid){
      return false;
    }
    else {
      return this.videogameService.agregarVideogame(this.videogameForm.value)
      .subscribe({
        complete:() => {
          console.log('Registro agregado correctamente')
          this.ngZone.run(() =>
            this.router.navigateByUrl('/listar-videogame'));
        },
        error:(e) => {
          console.log(e);
        }
      })
    }
  }
}
