/* Calcular el promedio de 10 notas */

let readlineSync = require("readline-sync");
let nota
let suma = 0
let contador
for (contador = 1; contador < 11; contador ++) {
    nota = readlineSync.questionFloat("Ingrese la nota " + contador + ": ");
    suma = suma + nota;
}
let promedio = suma /10
console.log("El promedio de las notas es: " + promedio);