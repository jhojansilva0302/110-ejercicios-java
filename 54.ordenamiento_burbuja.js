// 54. Ordenamiento Burbuja
// Ordena un array usando el método burbuja.

// Definimos un array desordenado
let numeros = [64, 34, 25, 12, 22, 11, 90];

// Algoritmo burbuja
for (let i = 0; i < numeros.length - 1; i++) {
  for (let j = 0; j < numeros.length - i - 1; j++) {
    if (numeros[j] > numeros[j + 1]) {
      // Intercambiamos elementos
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}

console.log("Array ordenado:", numeros);
