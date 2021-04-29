/* Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la contraseña adecuada. 
• Considerar que tanto el usuario como la contraseña están formados sólo por letras. 
• El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene registrado para ese usuario. Tenga en cuenta que el sistema 
tiene registrado el usuario: Juan y la clave claveJuan */

let readlineSync = require("readline-sync");
let usuarioRegistrado = "Juan";
let claveRegistrada = "claveJuan";
let usuarioIngresado = readlineSync.question("Ingrese su usuario: ");
let claveIngresada = readlineSync.question("Ingrese su clave: ");
if (usuarioRegistrado == usuarioIngresado && claveRegistrada == claveIngresada) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

if ((usuarioRegistrado != usuarioIngresado) && (claveRegistrada == claveIngresada)) {
    console.log("El usuario ingresado es incorrecto");
} else {
    console.log("La clave ingresada es incorrecta")
}