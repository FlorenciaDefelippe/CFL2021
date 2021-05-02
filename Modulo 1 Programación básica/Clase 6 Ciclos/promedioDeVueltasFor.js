/* Calcular el promedio de 4 vueltas */

const readlineSync = require("readline-sync");
let suma = 0
let cantidadVueltas = readlineSync.questionInt("Ingrese cantidad de vueltas:" );
for (i = 0; i < cantidadVueltas; i ++) {
    let tiempoVuelta = readlineSync.questionInt("Ingrese tiempo de vuelta: ");
        suma = suma + tiempoVuelta;
}
let promedio = suma / cantidadVueltas;
console.log("El promedio de vueltas es: " + promedio);
