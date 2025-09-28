// 54. Ordenamiento Burbuja
// Ordena un array usando el método burbuja (bubble sort)

// Definimos un array desordenado de ejemplo
let numeros = [64, 34, 25, 12, 22, 11, 90];

// Algoritmo de burbuja
for (let i = 0; i < numeros.length - 1; i++) {
  for (let j = 0; j < numeros.length - i - 1; j++) {
    if (numeros[j] > numeros[j + 1]) {
      // Intercambiamos elementos si el actual es mayor que el siguiente
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}

// Mostramos el array ordenado
console.log("Array ordenado:", numeros);
