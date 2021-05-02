/* Realizar un algoritmo que dado un número entero ingresado por el usuario, 
visualice en pantalla si es par o impar
• En el caso de ingresar un cero, se debe volver a pedir el número por teclado 
(hasta que se ingrese un número mayor que cero) */

let readlineSync = require("readline-sync");
let numeroIngresado = readlineSync.questionInt("Ingrese un numero: ");
while (numeroIngresado == 0) {
    numeroIngresado = readlineSync.questionInt("Ingrese otro numero: ");    
} if (numeroIngresado % 2 == 0) {
    console.log("El numero ingresado es par")
} else {
    console.log("El numero ingresado es impar");
}