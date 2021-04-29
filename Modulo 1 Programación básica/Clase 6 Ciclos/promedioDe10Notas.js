/* Calcular el promedio de 10 notas */

let readlineSync = require("readline-sync");
let nota 
let promedio
let suma = 0
let contador = 0
while (contador <= 10) {
    nota = readlineSync.questionInt("Ingrese la nota: ");
    suma = suma + nota;
    console.log("La suma es: ",  suma);
    contador = contador + 1;
    }
    promedio = suma/10
    console.log("El promedio es: ", promedio); 