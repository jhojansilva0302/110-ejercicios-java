//Calculadora Básica
//Este programa recibe dos números y muestra su suma, resta, multiplicación y división.

// Pedimos al usuario el primer número
let numero1 = parseFloat(prompt("Ingrese el primer número:"));

// Pedimos al usuario el segundo número
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Calculamos la suma
let suma = numero1 + numero2;

// Calculamos la resta
let resta = numero1 - numero2;

// Calculamos la multiplicación
let multiplicacion = numero1 * numero2;

// Calculamos la división
let division = numero1 / numero2;

// Mostramos todos los resultados en consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
