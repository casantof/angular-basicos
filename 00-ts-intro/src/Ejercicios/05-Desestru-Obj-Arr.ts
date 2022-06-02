/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor:'Ed Sheeran',
        anio: 2015
    }
}
//Esto se llama destructuración, esto lo que hace es basicamente para no  colocar todo el codigo, para 
//llamar a sus hijos
const { volumen, segundo, cancion, detalles } = reproductor;
//const {autor, anio} = detalles;//Esta es una forma
const { autor, anio } = detalles;

//console.log( 'El volumen actual es de: ', volumen);
//console.log( 'El segundo actual es de: ', segundo);
//console.log( 'La Canción actual es de: ', cancion);
//console.log( 'El autor es: ', autor);
//console.log( 'El anio actual es de: ', anio);

/******************************************************************************************************
                            Desestructuracion de arreglos
*******************************************************************************************************/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks' ];
//Asi se destructura una arreglo es con llaves cuadradas ([])
const [p1, p2, p3] = dbz;

console.log( 'EL personaje es: ', p1 );
console.log( 'EL personaje es: ', p2 );
console.log( 'EL personaje es: ', p3 );