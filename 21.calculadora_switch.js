// 21. Calculadora con Switch
// Esta calculadora realiza operaciones básicas usando switch

// Definimos los dos números a operar
let num1 = 10; // Primer número
let num2 = 5;  // Segundo número

// Definimos la operación a realizar
let operacion = "+"; // Puede ser "+", "-", "*", "/"

// Usamos switch para decidir qué operación realizar
switch (operacion) {
    case "+": // Suma
        console.log("Resultado: " + (num1 + num2));
        break;
    case "-": // Resta
        console.log("Resultado: " + (num1 - num2));
        break;
    case "*": // Multiplicación
        console.log("Resultado: " + (num1 * num2));
        break;
    case "/": // División
        if (num2 !== 0) {
            console.log("Resultado: " + (num1 / num2));
        } else {
            console.log("Error: División por cero.");
        }
        break;
    default: // Si no es ninguna operación válida
        console.log("Operación no válida.");
}
