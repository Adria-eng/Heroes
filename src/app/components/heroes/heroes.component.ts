import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(public _heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)
    
  }

  verHeroe(idx: Heroe) {
    console.log(idx);
    this.router.navigate(['/heroe', this.heroes.indexOf(idx)]);
  }

  

  
}



