import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
=======
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
>>>>>>> 9d7a6b6884e1f16705b3ee67eef5b7d8b5a9791b

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
<<<<<<< HEAD
  nuevoHeroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };
  

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    // Lógica de inicialización
  }

  guardarHeroe() {
    if (this.nuevoHeroe.nombre && this.nuevoHeroe.aparicion && this.nuevoHeroe.bio && this.nuevoHeroe.casa && this.imagenSeleccionada) {
      this.heroesService.agregarHeroe(this.nuevoHeroe, this.imagenSeleccionada);
  
      // Reiniciar el formulario y la propiedad de la imagen seleccionada
      this.nuevoHeroe = {
        nombre: '',
        bio: '',
        img: '',
        aparicion: '',
        casa: ''
      };
      this.imagenSeleccionada = null;
    } else {
      console.log('Por favor, complete todos los campos del formulario');
    }
  }
  imagenSeleccionada: File | null = null;
  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  }
}
=======

  formReg: FormGroup;

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.heroesService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
>>>>>>> 9d7a6b6884e1f16705b3ee67eef5b7d8b5a9791b
