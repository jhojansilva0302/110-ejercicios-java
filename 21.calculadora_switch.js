// 21. Calculadora con Switch
// Implementa una calculadora usando switch para las operaciones

// Pedimos dos números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Pedimos la operación
let operacion = prompt("Ingrese la operación (+, -, *, /):");

// Usamos switch para decidir qué operación realizar
switch (operacion) {
    case "+":
        console.log("Resultado: " + (num1 + num2));
        break;
    case "-":
        console.log("Resultado: " + (num1 - num2));
        break;
    case "*":
        console.log("Resultado: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Resultado: " + (num1 / num2));
        } else {
            console.log("Error: División por cero.");
        }
        break;
    default:
        console.log("Operación no válida.");
}
