// 2- Pide dos números. Pide si quiere sumar o restar (+/-). Según el caso, llama a la función sumar() o restar() pasándole esos parametros y muestra el resultado de sumar o restar ambos números. Prueba a realizar esto sin return
// +EXTRA: prueba a realizar lo mismo con return

let operacion = parseInt(prompt("Escriba el número correspondiente del cálculo que desee hacer:\n 1. Sumar.\n 2. Restar.\n 3. Multiplicar.\n 4. Dividir."));

if (operacion == 1){
    // let num1 = parseFloat(prompt("Ingrese el primer número: ")); -----EJEMPLO SIN RETURN-----
    // let num2 = parseFloat(prompt("Ingrese el segundo número: ")); -----EJEMPLO SIN RETURN-----
    document.write("Ha elegido la operación: Suma, y el resultado es: \n" + suma(num1, num2));
}
else if (operacion == 2) {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    document.write("Ha elegido la operación: Suma, y el resultado es: \n" + resta(num1, num2));
}

else if (operacion == 3){
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    document.write("Ha elegido la operación: Suma, y el resultado es: \n" + multiplicacion(num1, num2));
}

else if (operacion == 4){
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    document.write("Ha elegido la operación: Suma, y el resultado es: \n" + division(num1, num2));
} else {

document.write("No hay más operaciones");

}


function suma(n1, n2) {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let reSuma = (n1 + n2);
    // return reSuma; ------------------------------------------EJEMPLO SIN RETURN-------------------------------
}

function resta(n1, n2) {
    return n1-n2;
}

function multiplicacion(n1, n2) {
    let reMultiplicacion = (n1 * n2);
    return reMultiplicacion;
}

function division(n1, n2) {
    let reDivision = (n1 / n2);
    return reDivision;
}



