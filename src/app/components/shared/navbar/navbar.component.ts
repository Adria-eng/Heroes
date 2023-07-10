import { Component, Inject } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  filtro: string = '';

  constructor(private heroesService:HeroesService, private router:Router) {}
  
  SearchText(dato:string) {
    this.heroesService.search= dato;
    console.log(this.filtro)
  }
 
}
