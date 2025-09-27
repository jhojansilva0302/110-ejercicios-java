// 42. Suma de Números
// Calcula la suma de los primeros n números naturales.

// Pedimos n al usuario
let n = parseInt(prompt("Ingrese un número n:"));

// Validamos
if (isNaN(n) || n <= 0) {
  console.log("Número inválido.");
} else {
  let suma = 0;
  // Sumamos desde 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  console.log(`La suma de los primeros ${n} números naturales es: ${suma}`);
}
