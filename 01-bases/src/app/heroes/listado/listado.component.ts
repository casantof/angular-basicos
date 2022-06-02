import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  heroeBorrado: string = '';
  bandera: boolean = false;

    borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

    if(this.heroeBorrado > ''){
    this.bandera = true;
     }
  }

}
