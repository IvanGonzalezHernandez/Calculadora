// Variables para los números, el tipo de operación, el resultado, y el historial de operaciones
let num1;
let num2;
let tipoOperacion;
let resultado;
let historial = [];

// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir dos números, con control de error al dividir por cero
function dividir(num1, num2) {
    if(num2 == 0){
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}

// Función para calcular la raíz cuadrada de un número, con control de error para números negativos
function raiz(num1) {
    if(num1 < 0){
        return "Error: No se puede calcular la raíz cuadrada de un número negativo";
    }
    return Math.sqrt(num1);
}

// Función para mostrar el historial de operaciones realizadas
function mostrarHistorial() {
    console.log("-HISTORIAL-");
    for(let elemento of historial){
        console.log(elemento);
    }
}

// Función para validar que el input sea un número
function validarInput(numero) {
    if (isNaN(numero)) {  // Comprueba si el valor no es un número
        console.log(`El valor introducido no es un número`);
        return false;
    }
    return true;
}

// Función principal de la calculadora
function calculadora(){
    // Bucle que continúa hasta que se elija la opción "s" (salir)
    while (tipoOperacion != "s") {
        
        // Solicitar y validar el primer número
        do {
            num1 = parseFloat(prompt("Introduce un primer número"));
        } while (!validarInput(num1)); // Repite si el input no es válido

        // Solicitar y validar el segundo número
        do {
            num2 = parseFloat(prompt("Introduce un segundo número"));
        } while (!validarInput(num2)); // Repite si el input no es válido

        // Solicitar el tipo de operación al usuario
        tipoOperacion = prompt(`Introduce el tipo de operación: \nSuma: \"+\" \nResta: \"-\" \nMultiplicación: \"*\" \nDivisión: \"/\" \nRaíz Cuadrada: \"r\" (Se utilizará el ${num1} para calcular la raíz) \nHistorial: \"h\" \nSalir: \"s\" `, "Por ejemplo: +").toLowerCase();

        // Realizar la operación elegida según el tipo de operación ingresado
        switch (tipoOperacion) {
            case "+":  // Suma
                resultado = sumar(num1, num2);
                console.log(resultado);
                historial.push(`Suma: ${num1} + ${num2} = ${resultado}`);
                break;
            case "-":  // Resta
                resultado = restar(num1, num2);
                console.log(resultado);
                historial.push(`Resta: ${num1} - ${num2} = ${resultado}`);
                break;
            case "*":  // Multiplicación
                resultado = multiplicar(num1, num2);
                console.log(resultado);
                historial.push(`Multiplicación: ${num1} * ${num2} = ${resultado}`);
                break;
            case "/":  // División
                resultado = dividir(num1, num2);
                console.log(resultado);
                historial.push(`División: ${num1} / ${num2} = ${resultado}`);
                break;
            case "r":  // Raíz cuadrada
                resultado = raiz(num1);
                console.log(resultado);
                historial.push(`Raíz cuadrada de ${num1} = ${resultado}`);
                break;
            case "h":  // Mostrar historial de operaciones
                mostrarHistorial();
                break;
            case "s":  // Salir de la calculadora
                console.log("Saliendo de la calculadora");
                break;
            default:  // Mensaje de error para operadores no válidos
                console.log(`"${tipoOperacion}" no es un operador válido`);
                break;
        }
    }
}

// Llamada a la función principal para iniciar la calculadora
calculadora();
