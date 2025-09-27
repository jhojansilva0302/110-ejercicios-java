// 87. Función Recursiva Fibonacci
// Genera el n-ésimo número de Fibonacci de forma recursiva

// Función recursiva para Fibonacci
function fibonacci(n) {
  if (n <= 0) return 0;  // caso base 0
  if (n === 1) return 1; // caso base 1
  return fibonacci(n - 1) + fibonacci(n - 2); // recursión
}

// Ejemplo: primeros 10 números de Fibonacci
for (let i = 0; i < 10; i++) {
  console.log(`Fibonacci(${i}) =`, fibonacci(i));
}
