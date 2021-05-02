/* Realice un programa que devuelva el área del triangulo */

let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese la base del triangulo: ");
let altura = readlineSync.questionInt("Ingrese la altura del triangulo: ");

let resultado = calcularAreaTriangulo (base, altura);
console.log("El area del triangulo es: " + resultado);

function calcularAreaTriangulo (b, a) {
    let resultado = (b * a) / 2;
    return resultado;
}