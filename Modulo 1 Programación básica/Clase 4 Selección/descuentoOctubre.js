/* Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
Desarrolle un algoritmo que dada una compra: precio unitario y cantidad el mes indicados por el usuario, 
determine si el cliente tiene descuento o no */

let readlineSync = require("readline-sync");
let precioUnitario = readlineSync.questionFloat("Ingrese el precio unitario: ");
let cantidadProducto = readlineSync.questionInt("Ingrese la cantidad: ");
let precioTotal = precioUnitario * cantidadProducto;
let mes = readlineSync.question("Ingrese el mes: ");
if (mes == "octubre") {
    let descuento = (precioTotal * 15)/100;
    let precioFinal = precioTotal - descuento;
    console.log("Tiene el 15% de descuento. El precio final es: " + precioFinal);
} else {
    console.log("No tiene descuento. El precio final es: " + precioTotal)
}