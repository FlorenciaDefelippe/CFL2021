/* Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar. 
Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto medalla de bronce. 
En caso que quede en otra posición se entrega certificado de participación */

let readlineSync = require("readline-sync");
let posicionLlegada = readlineSync.questionInt("Ingrese su posicion de llegada: ");
switch (posicionLlegada) {
    case 1: 
    console.log("Entregar medalla de oro");
    break;
    case 2: 
    console.log("Entregar medalla de plata");
    break;
    case 3: 
    console.log("Entregar medalla de bronce");
    default:
    console.log("Entregar certificado de participación");
}