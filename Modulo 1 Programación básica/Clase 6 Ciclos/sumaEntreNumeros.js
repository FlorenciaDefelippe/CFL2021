/* Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números 
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27 */

let readlineSync = require("readline-sync");
let numeroIngresado1 = readlineSync.questionInt("Ingrese un numero: ");
let numeroIngresado2 = readlineSync.questionInt("Ingrese un numero: ");
let actual = numeroIngresado1;
let suma = 0;
while (actual <= numeroIngresado2) {
    suma = suma + actual;
    actual ++;
}
console.log("El resultado de la suma es: " + suma);
