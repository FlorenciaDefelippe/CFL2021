/* Desarrolle un algoritmo que diga el precio de una compra 
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10% */

let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio del producto: ");
let cantidadProducto = readlineSync.questionInt("Ingrese la cantidad del producto: ");
let precioTotal = precioProducto * cantidadProducto;
console.log("El precio total es: ", precioTotal);
if (precioTotal > 1000) {
    let descuento = precioTotal * 0.1;
    let precioFinal = precioTotal - descuento;
    console.log ("Tiene descuento. El precio final es: "+ precioFinal);
} else {
    console.log ("No tiene descuento. El precio es: " + precioTotal);
}