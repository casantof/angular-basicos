import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {
  //Esta linea ya no se va usar con la modificación que hizo de cambiar todo el codigo
  //  @Input('data') personajes: Personaje[] = [];

  get personajes(){
      return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService){
  }
}
