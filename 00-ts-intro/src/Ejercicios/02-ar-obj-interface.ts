/*
    ===== Código de TypeScript =====
*/
//Aqui estamos definiendo un arreglo que tiene varios tipos, la idea no es hacer esto sino es solo 
//informativo, let habilidades: (boolean | string | number)[] = ['batch', 'Counter', 'Healing', 123];
//la idea es que sea de un solo tipo, por ejemplo String, hay que no olvidar que si le vamos
//a indicar el tipo de arreglo que es debemos al lado colocar que es un arreglo con los [], ya que sino
//se coloca genera error.
let habilidades: string[] = ['batch', 'Counter', 'Healing'];

//A continuación un ejemplo de como se define un objeto, en este caso lo definimos como una constante
//pero pues no es obligación ya que hay momentos donde se altera y se puede definir de otra manera
//Aqui vamos a dicionar la función interface, que lo que hace es que ahi definimos como queremos que 
//se vea el objeto. con eso es una forma de controlar lo que queremos en este

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //En esta line ale estoy diciendo que este parametro es opcional con el ?
}

const personaje: Personaje = {
    nombre: 'Slider',
    hp: 100,
    habilidades: ['batch', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Natal';

console.table( personaje );