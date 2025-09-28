// 58. Fibonacci con Array
// Genera serie Fibonacci almacenando en un array

// Cantidad de términos a generar
let n = 10; // <- puedes cambiar el valor según necesites

// Validamos la entrada
if (isNaN(n) || n <= 0) {
  console.log("Número inválido.");
} else {
  let fibonacci = [0, 1]; // primeros dos términos

  // Generamos la serie desde el índice 2 hasta n-1
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // suma de los dos anteriores
  }

  // Mostramos la serie completa hasta n términos
  console.log("Serie Fibonacci:", fibonacci.slice(0, n));
}
