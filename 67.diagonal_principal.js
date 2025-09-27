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

// Recorremos solo los índices de la diagonal principal (i = j)
for (let i = 0; i < matriz.length; i++) {
  sumaDiagonal += matriz[i][i]; // sumamos el valor de la diagonal
}

// Mostramos la matriz original
console.log("Matriz:", matriz);

// Mostramos la suma de la diagonal principal
console.log("Suma diagonal principal:", sumaDiagonal);
