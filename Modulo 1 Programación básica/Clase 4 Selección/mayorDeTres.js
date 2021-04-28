/* Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres */

let readlineSync = require("readline-sync");
let numeroIngresado1 = readlineSync.questionInt("Ingrese un numero: ");
let numeroIngresado2 = readlineSync.questionInt("Ingrese un numero: ");
let numeroIngresado3 = readlineSync.questionInt("Ingrese un numero: ");
if (numeroIngresado1 > numeroIngresado2 && numeroIngresado1 > numeroIngresado3) {
    console.log("El numero mayor es: " + numeroIngresado1);
} else
if (numeroIngresado2 > numeroIngresado1 && numeroIngresado2 > numeroIngresado3) {
    console.log("El numero mayor es: " + numeroIngresado2);
} else
if (numeroIngresado3 > numeroIngresado1 && numeroIngresado3 > numeroIngresado2) {
    console.log("El numero mayor es: " + numeroIngresado3);
} else 
if (numeroIngresado1 == numeroIngresado2 && numeroIngresado1 == numeroIngresado3) {
    console.log("Los tres numeros son iguales");
}