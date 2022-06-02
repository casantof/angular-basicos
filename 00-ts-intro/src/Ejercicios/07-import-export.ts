import { Producto, caculaISV } from './06-Desestruct-Argume-Funcion';
/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = caculaISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);
