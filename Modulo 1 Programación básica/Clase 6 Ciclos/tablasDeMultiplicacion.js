/* Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de multiplicación,
el usuario también deberá ingresar dicho valor */

let readlineSync = require("readline-sync");
let numeroBase = readlineSync.questionInt("Ingrese el numero que desea multiplicar: ");
let numeroExponente = readlineSync.questionInt("Ingrese hasta que numero desea multiplicarlo: ");
let contador = 0
for (contador; contador <= numeroExponente; contador ++) {
    let resultado = numeroBase * contador;
    console.log("El resultado de " + numeroBase + " x " + contador +  " es: " + resultado);
}
