// 58. Fibonacci con Array
// Genera serie Fibonacci almacenando en un array.

// Pedimos cuántos términos generar
let n = parseInt(prompt("Ingrese la cantidad de términos de Fibonacci:"));

// Validamos
if (isNaN(n) || n <= 0) {
  console.log("Número inválido.");
} else {
  let fibonacci = [0, 1]; // primeros dos términos

  // Generamos la serie
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  // Si n es 1 o 2, recortamos el array
  console.log("Serie Fibonacci:", fibonacci.slice(0, n));
}
