/*
    ===== Código de TypeScript =====
*/
/****************************************************************************************************
 *                          Desestructuración de argumentos
***************************************************************************************************** */

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia 1',
    precio: 150
}

const tableta: Producto = {
    desc: 'ipad Air',
    precio: 350
}

export function caculaISV ( productos: Producto[] ): [number, number] {
    let total = 0;

    //El forEach, lo que hace es que va barrer el arreglo de productos y leerlos 1 por 1
    //Asi seria la forma nomal de traer el precio del producto, pero pues 
    //productos.forEach( (producto) => {
    //  en esta linea tendria que buscarlos producto.precio    
    //    total += producto.precio;

    //La forma sencilla de la desestructuración seria de la siguiente manera
    productos.forEach( ({ precio }) => {
        total += precio;
    })
    return [total, total * 0.15];
}

//const articulos = [ telefono, tableta ];
//const [ total, isv ] = caculaISV( articulos );
//console.log('Total: ', total );
//console.log('ISV: ', isv );