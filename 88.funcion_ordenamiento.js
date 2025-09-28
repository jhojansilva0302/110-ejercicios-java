// 88. Función de Ordenamiento
// Crea una función personalizada para ordenar arrays (método burbuja)

// Función de ordenamiento burbuja
function ordenarArray(arr) {
  let n = arr.length;

  // Recorremos varias veces el array
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiamos valores si están en orden incorrecto
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr; // devolvemos el array ordenado
}

// Array de ejemplo
let numeros = [64, 34, 25, 12, 22, 11, 90];

console.log("Array original:", numeros);
console.log("Array ordenado:", ordenarArray([...numeros])); // usamos copia para mantener el original
