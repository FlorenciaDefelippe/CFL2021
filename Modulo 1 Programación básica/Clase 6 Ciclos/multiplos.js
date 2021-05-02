/* Cree un algoritmo que visualice los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
• Tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo
• En dichos casos, solamente indique el número una vez */


let readlineSync = require("readline-sync");
let contador
for (contador = 1; contador <= 100; contador ++) {
    if (contador % 2 == 0 || contador % 3 == 0) {
        console.log("El numero " + contador + " es múltiplo de 2 y/o de 3 ");
    } 
}



