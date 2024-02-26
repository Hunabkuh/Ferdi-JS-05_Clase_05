// 1- Dentro de un bucle, ejecutar x veces (x según usuario) una función que te pida saludo (“Hola”, “Adiós”, etc) y nombre (“Marga”, “Carol”, etc ) , y al final te muestre los resultados en pantalla: Hola Marga, Adiós Carol (líneas separadas)

function saludar (saludo, nombre) {
    let greeting = prompt("Escriba una frase para saludar o despedirse: ");
    let name = prompt("Escriba su nombre");
    document.write(greeting + " " + name + ".<br>");
}

let cantidadSaludos = parseInt(prompt("Ingrese la cantidad de personas a las que va a saludar:"));

for (i=0; i<cantidadSaludos; i++){
    saludar();
}

