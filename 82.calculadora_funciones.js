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
console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(6, 7));
console.log("División:", dividir(20, 5));
