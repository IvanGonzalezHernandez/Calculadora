let num1;
let num2;
let tipoOperacion;
let resultado;
let historial = [];

// Función para sumar
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir
function dividir(num1, num2) {
    if(num2 == 0){
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}

// Función Raíz cuadrada
function raiz(num1) {
    if(num1 < 0){
        return "Error: No se puede calcular la raíz cuadrada de un número negativo";
    }
    return Math.sqrt(num1);
}

// Función para mostrar el historial
function mostrarHistorial() {
    console.log("-HISTORIAL-")
    for(let elemento of historial){
        console.log(elemento);
    }
}

// Función control de errores
function validarInput(numero) {
    if (isNaN(numero)) {
        console.log(`El valor introducido no es un número`);
        return false;
    }
    return true;
}

// Función Calculadora
function calculadora(){
    while (tipoOperacion != "s") {
    
        // Solicitar y validar num1
        do {
            num1 = parseFloat(prompt("Introduce un primer número"));
        } while (!validarInput(num1));

        // Solicitar y validar num2
        do {
            num2 = parseFloat(prompt("Introduce un segundo número"));
        } while (!validarInput(num2));

        tipoOperacion = prompt(`Introduce el tipo de operación: \nSuma: \"+\" \nResta: \"-\" \nMultiplicación: \"*\" \nDivisión: \"/\" \nRaíz Cuadrada: \"r\" (Se utilizará el ${num1} para calcular la raíz) \nHistorial: \"h\" \nSalir: \"s\" `, "Por ejemplo: +").toLowerCase();

    
        switch (tipoOperacion) {
            case "+":
                console.log(sumar(num1,num2));
                resultado = sumar(num1,num2);
                historial.push(`Suma: ${num1} + ${num2} = ${resultado}`);
                break;
            case "-":
                console.log(restar(num1,num2));
                resultado = restar(num1,num2);
                historial.push(`Resta: ${num1} - ${num2} = ${resultado}`);
                break;
            case "*":
                console.log(multiplicar(num1,num2));
                resultado = multiplicar(num1,num2);
                historial.push(`Multiplicación: ${num1} * ${num2} = ${resultado}`);
                break;
            case "/":
                console.log(dividir(num1,num2));
                resultado = dividir(num1,num2);
                historial.push(`División: ${num1} / ${num2} = ${resultado}`);
                break;
            case "r":
                console.log(raiz(num1));
                resultado = raiz(num1);
                historial.push(`Raíz cuadrada de ${num1} = ${resultado}`);
                break;
            case "h":
                mostrarHistorial();
                break;
            case "s":
                console.log("Saliendo de la calculadora");
                break;
            default:
                console.log(`"${tipoOperacion}" no es un operador válido`);
                break;
        }
    }
}

calculadora();