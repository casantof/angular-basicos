import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  //Aqui se coloca privado, porque no queremos que nadie pueda tocarme este arreglo, obviamente
  //le voy a dar acceso en otro lado para que se pueda actualizar, pero que solo sea tocado alla
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder : 15000
    },
    {
      nombre: 'Vegeta',
      poder : 7500
    },
  ];

  get personajes(): Personaje[]{
      //Estos 3 puntos significan que es un operador spred, basicamente rompe la doferencia con estos
      //personajes y crea uno nuevo
      return [...this._personajes];
  }

    constructor(){}

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push( personaje );
      }

}
