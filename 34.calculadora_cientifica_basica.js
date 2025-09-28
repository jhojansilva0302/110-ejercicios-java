// 34. Calculadora Científica Básica
// Este programa implementa raíz cuadrada, potencia, logaritmo, seno y coseno

// Definimos la operación a realizar
let oper = "potencia"; // Puede ser "raiz", "potencia", "log", "sin" o "cos"
oper = oper.toLowerCase(); // Normalizamos a minúsculas

switch (oper) {
  case "raiz":
    let x = 16; // Número para calcular la raíz cuadrada
    if (isNaN(x)) {
      console.log("Número inválido.");
    } else {
      console.log("Raíz cuadrada de " + x + " = " + Math.sqrt(x));
    }
    break;

  case "potencia":
    let base = 5; // Base de la potencia
    let exp = 3;  // Exponente
    if (isNaN(base) || isNaN(exp)) {
      console.log("Base o exponente inválido.");
    } else {
      console.log(base + " ^ " + exp + " = " + Math.pow(base, exp));
    }
    break;

  case "log":
    let y = 10; // Número para calcular logaritmo natural
    if (isNaN(y) || y <= 0) {
      console.log("Número inválido para logaritmo (debe ser > 0).");
    } else {
      console.log("ln(" + y + ") = " + Math.log(y));
    }
    break;

  case "sin":
    let angS = 30; // Ángulo en grados
    if (isNaN(angS)) {
      console.log("Ángulo inválido.");
    } else {
      let radS = angS * (Math.PI / 180); // Convertimos a radianes
      console.log("sin(" + angS + "°) = " + Math.sin(radS));
    }
    break;

  case "cos":
    let angC = 60; // Ángulo en grados
    if (isNaN(angC)) {
      console.log("Ángulo inválido.");
    } else {
      let radC = angC * (Math.PI / 180); // Convertimos a radianes
      console.log("cos(" + angC + "°) = " + Math.cos(radC));
    }
    break;

  default:
    console.log("Operación no válida. Elija: raiz, potencia, log, sin o cos.");
}
