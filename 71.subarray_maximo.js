// 71. Subarray Máximo
// Encuentra el subarray con la suma máxima (Kadane's Algorithm)

// Definimos un array de ejemplo
let numeros = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Inicializamos variables
let maxActual = numeros[0];   // suma máxima terminando en la posición actual
let maxGlobal = numeros[0];   // suma máxima encontrada hasta ahora

// Recorremos el array desde el segundo elemento
for (let i = 1; i < numeros.length; i++) {
  // Decidimos si sumamos el valor al subarray actual o empezamos uno nuevo
  maxActual = Math.max(numeros[i], maxActual + numeros[i]);

  // Actualizamos el máximo global si es necesario
  if (maxActual > maxGlobal) {
    maxGlobal = maxActual;
  }
}

// Mostramos el array original
console.log("Array:", numeros);

// Mostramos la suma máxima encontrada
console.log("Suma máxima de subarray:", maxGlobal);
