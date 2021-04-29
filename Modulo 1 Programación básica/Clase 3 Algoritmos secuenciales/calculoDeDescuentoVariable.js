let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio del producto:");
let descuentoProducto = readlineSync.questionInt("Ingrese el descuento:");
let precioFinal = (precioProducto * (100 - descuentoProducto) / 100);
console.log("El precio es:", precioFinal); 