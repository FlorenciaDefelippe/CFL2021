/* Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a un juego en un parque de diversiones
Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más */

let readlineSync = require("readline-sync");
let alturaPermitida = 130
let alturaPersona = readlineSync.questionInt("Ingrese su altura en cm: ");
if (alturaPersona >= alturaPermitida) {
    console.log("Puede ingresar al juego");
} else {
    console.log("No puede ingresar");
}