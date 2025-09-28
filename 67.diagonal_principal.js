// 67. Diagonal Principal
// Suma los elementos de la diagonal principal de una matriz cuadrada

// Definimos una matriz cuadrada de 3x3
let matriz = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10]
];

// Inicializamos la suma en 0
let sumaDiagonal = 0;

// Recorremos solo los índices de la diagonal principal
for (let i = 0; i < matriz.length; i++) {
  sumaDiagonal += matriz[i][i];
}

// Mostramos resultados
console.log("Matriz:", matriz);
console.log("Suma diagonal principal:", sumaDiagonal);
