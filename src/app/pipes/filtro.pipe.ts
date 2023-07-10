import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../services/heroes.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(heroes: Heroe[], searchText: string): Heroe[] {
    if (!heroes) {
      return [];
    }
    if (!searchText) {
      return heroes;
    }
    searchText = searchText.toLowerCase();
    return heroes.filter(heroe => {
      return (
        heroe.nombre.toLowerCase().includes(searchText) 
      );
    });
  }
}