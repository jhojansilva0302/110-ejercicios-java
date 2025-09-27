// 51. Suma de Matrices
// Suma dos matrices de igual dimensión.

// Definimos dos matrices
let matrizA = [
  [1, 2, 3],
  [4, 5, 6]
];

let matrizB = [
  [7, 8, 9],
  [10, 11, 12]
];

// Creamos matriz resultado vacía
let resultado = [];

// Recorremos las filas
for (let i = 0; i < matrizA.length; i++) {
  resultado[i] = []; // inicializamos fila
  for (let j = 0; j < matrizA[i].length; j++) {
    resultado[i][j] = matrizA[i][j] + matrizB[i][j]; // suma elemento a elemento
  }
}

console.log("Matriz A:", matrizA);
console.log("Matriz B:", matrizB);
console.log("Resultado de la suma:", resultado);
