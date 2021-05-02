/* Simular la espera de un colectivo */

const readlineSync = require('readline-sync');
console.log("Esperando el colectivo");
let respuesta = readlineSync.question("Llego el colectivo? S/N: ");
while (respuesta != "S") {
    console.log("Esperando el colectivo");
    respuesta = readlineSync.question("Llego el colectivo? S/N: ");
}
console.log("Llego el colectivo");