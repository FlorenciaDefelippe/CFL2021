/* Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje 
indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa */

let readlineSync = require("readline-sync");
let claveIngresada = readlineSync.question("Ingrese la clave: ");
let intento = 0;
while (claveIngresada != "eureka" && intento < 2) {
    console.log ("La clave ingresada es incorrecta");
    claveIngresada = readlineSync.question("Ingrese la clave: ");
    intento++;
}
if (claveIngresada == "eureka") {
    console.log("La clave ingresada es correcta");
} else {
    console.log("La clave ingresada es incorrecta");
}