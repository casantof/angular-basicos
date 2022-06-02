/*
    ===== Código de TypeScript =====
*/
/**Este comando es como se definen las variables, hay que ver que muestra que es un string */
let nombre: string = "Carlos";
/**Este comando lo que hace es que vuelve una variable constante y basicamente siempre tendra el mismo valor */
const apellido = "Santofimio";
/**En este caso vamos a forzar para que una variable tenga numeros y string al mismo tiempo*/
let hp: number | string = 95;
hp = 'Full';
/**Definir un boolean */
let estaVivo = true;

console.log(nombre, apellido, hp);