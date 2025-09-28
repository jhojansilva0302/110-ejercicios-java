// 97. Calculadora Científica
// Funciones matemáticas avanzadas (trigonometría, logaritmos, potencias)

// Funciones trigonométricas
function seno(x) {
  return Math.sin(x);
}
function coseno(x) {
  return Math.cos(x);
}
function tangente(x) {
  return Math.tan(x);
}

// Logaritmos y potencias
function logaritmo(x) {
  return Math.log(x); // logaritmo natural
}
function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

// Ejemplo de uso
console.log("Seno(π/2):", seno(Math.PI / 2));
console.log("Coseno(0):", coseno(0));
console.log("Tangente(π/4):", tangente(Math.PI / 4));
console.log("Logaritmo(10):", logaritmo(10));
console.log("2^8:", potencia(2, 8));

// Versión extendida: puedes ingresar cualquier valor
let valor = Math.PI / 3;
console.log(`Seno(${valor}):`, seno(valor));
console.log(`Coseno(${valor}):`, coseno(valor));
console.log(`Tangente(${valor}):`, tangente(valor));
console.log(`Logaritmo(${valor}):`, logaritmo(valor));
console.log(`${valor}^3:`, potencia(valor, 3));
