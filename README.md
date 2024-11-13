# Calculadora Interactiva en JavaScript
![image](https://github.com/user-attachments/assets/ddbcde48-04f8-4235-9077-8c0c8c0b8f41)

Este proyecto es una calculadora básica que permite realizar operaciones aritméticas y ver el historial de operaciones. Incluye una interfaz de consola en la que el usuario puede introducir dos números y un tipo de operación para obtener el resultado.

## Funcionalidades

La calculadora permite realizar las siguientes operaciones:
- **Suma (+)**: suma de dos números.
- **Resta (-)**: resta de dos números.
- **Multiplicación (*)**: multiplicación de dos números.
- **División (/)**: división de dos números (con manejo de errores en caso de división por cero).
- **Raíz Cuadrada (r)**: calcula la raíz cuadrada del primer número (maneja el error si el número es negativo).
- **Historial (h)**: muestra el historial de operaciones realizadas.
- **Salir (s)**: permite salir del programa.

## Estructura del Código

### Variables
- `num1` y `num2`: números introducidos por el usuario.
- `tipoOperacion`: operación seleccionada por el usuario.
- `resultado`: resultado de la operación actual.
- `historial`: almacena el historial de operaciones en un array de strings.

### Funciones

- **sumar(num1, num2)**: retorna la suma de los dos números.
- **restar(num1, num2)**: retorna la resta del segundo número del primero.
- **multiplicar(num1, num2)**: retorna el producto de los dos números.
- **dividir(num1, num2)**: retorna el resultado de dividir el primer número por el segundo o un mensaje de error si el segundo número es cero.
- **raiz(num1)**: retorna la raíz cuadrada del número o un mensaje de error si el número es negativo.
- **mostrarHistorial()**: muestra el historial de operaciones en la consola.
- **validarInput(numero)**: valida que el input sea un número.

### Función Principal
- **calculadora()**: controla el flujo del programa, solicitando inputs al usuario, validando entradas y llamando a las funciones correspondientes según el tipo de operación.

## Ejecución del Proyecto

1. Asegúrate de tener un entorno para ejecutar JavaScript (como un navegador o Node.js).
2. Copia el código en un archivo `.js`.
3. Abre la consola y ejecuta el archivo. La calculadora te guiará en cada paso.

## Ejemplo de Uso

1. Ejecuta el archivo y sigue las instrucciones en la consola.
2. Introduce dos números y selecciona la operación.
3. Visualiza el resultado y el historial, o elige salir de la calculadora.

## Notas
- La función `dividir` maneja el caso de división por cero.
- La función `raiz` maneja el caso de números negativos.
- Los resultados de cada operación se guardan en el historial y pueden visualizarse en cualquier momento.

## Autor
Iván González Hernández.

