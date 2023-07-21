import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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
