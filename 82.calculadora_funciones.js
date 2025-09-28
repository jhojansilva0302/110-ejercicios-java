// 82. Calculadora con Funciones
// Implementa una calculadora usando funciones para cada operación

// Función suma
function sumar(a, b) {
  return a + b;
}

// Función resta
function restar(a, b) {
  return a - b;
}

// Función multiplicación
function multiplicar(a, b) {
  return a * b;
}

// Función división (con validación de división por cero)
function dividir(a, b) {
  if (b === 0) {
    return "Error: división por cero";
  }
  return a / b;
}

// Ejemplos de uso
console.log("5 + 3 =", sumar(5, 3));
console.log("10 - 4 =", restar(10, 4));
console.log("6 * 7 =", multiplicar(6, 7));
console.log("20 / 5 =", dividir(20, 5));
console.log("10 / 0 =", dividir(10, 0)); // prueba división por cero
