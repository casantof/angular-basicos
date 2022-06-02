/*
    ===== Código de TypeScript =====
*/
/**************************************************************************************************
 *                              Genericos
 ****************************************************************************************************/
/**
 * En esta parte vamos a ver que se puede asignar para que un parametro sea de tipo gwnwrico.
 * Eso se hace con <T>
 */
function queTipoSoy<T>( argumento: T){
        return argumento;
}

let SoyString = queTipoSoy('Hola mundo');
let SoyNumero = queTipoSoy(100);
let SoyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

//Aqui lo que queremos es asignar al generico que sea de tipo numero.
let SoyExplicito = queTipoSoy<number>(200);