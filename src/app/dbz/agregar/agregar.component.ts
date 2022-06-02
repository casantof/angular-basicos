import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

@Input() nuevo: Personaje = {
      nombre: '',
      poder: 0
}

constructor( private dbzService: DbzService ){

}

//Esto se comentarea ya que no necesitamos enviar ningun evento
//@Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

agregar(){
    if ( this.nuevo.nombre.trim().length === 0 ){ return; }

    console.log( this.nuevo );
    //Ya no se necesita esta linea
    //    this.OnNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder :  0
    }
  }

}
