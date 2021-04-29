/* Una empresa desea premiar a sus empleados con un aumento de sueldo. Este aumento se ajusta a la siguiente tabla:
Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre */

let readlineSync = require("readline-sync");
let sueldoActual = readlineSync.questionFloat("Ingrese su sueldo actual: ");
let sueldoConAumento=0;
if (sueldoActual >0 && sueldoActual <= 15000){
    let aumento = (sueldoActual*20)/100;
    sueldoConAumento = sueldoActual + aumento;
    console.log("El sueldo con aumento es:" + sueldoConAumento);
} else if (sueldoActual >= 15001 && sueldoActual <= 20000){
    let aumento = (sueldoActual*10)/100;
    sueldoConAumento = sueldoActual + aumento;
    console.log("El sueldo con aumento es:" + sueldoConAumento);
} else if (sueldoActual >= 20001 && sueldoActual <= 25000){
    let aumento = (sueldoActual*5)/100;
    sueldoConAumento = sueldoActual + aumento;
    console.log("El sueldo con aumento es:" + sueldoConAumento);
} else if (sueldoActual >= 25001) {
    console.log("No tiene aumento de sueldo")
}
