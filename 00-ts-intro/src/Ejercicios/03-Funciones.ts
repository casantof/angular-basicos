/*
    ===== Código de TypeScript =====
*/
//
function sumar( a:number, b:number): number {
    return a + b;
}

//función de flecha
const sumarFlecha = ( a:number, b:number): number => {
    return a + b;
}
const resultado = sumar( 10, 12);
console.log( resultado );

//En este ejemplo lo que se ve es que se adiciono en la mitad un valor opcional, lo que ocurre es que si
//no se envia ese valor opcional no alcanza a llegar a la base, por eso toca enviarle un valor a la base
//otra forma es que si se quiere cambiar el valor de la base, deben manda si o si el valor del opcional
function multiplicar( numero: number, otroNumero?: number, base: number = 2): number{
        return numero * base;
}
const resultado2 = multiplicar(10, 2, 4);
console.log( resultado2 );

//Otro ejemplo - Como definir las funciones
interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarx: number ): void{
    personaje.pv += curarx;
    console.log( personaje );
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv );
    }
}

curar(nuevoPersonaje, 20 );