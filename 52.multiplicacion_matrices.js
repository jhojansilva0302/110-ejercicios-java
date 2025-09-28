// 52. Multiplicación de Matrices
// Multiplica dos matrices válidas: (n x m) * (m x p) = (n x p)

// Definimos dos matrices de ejemplo
let A = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let B = [
  [7, 8, 9],
  [10, 11, 12]
];

// Creamos la matriz resultado vacía
let C = [];

// Recorremos filas de A y columnas de B
for (let i = 0; i < A.length; i++) {
  C[i] = []; // inicializamos fila
  for (let j = 0; j < B[0].length; j++) {
    let suma = 0;
    for (let k = 0; k < B.length; k++) {
      suma += A[i][k] * B[k][j]; // multiplicación y suma de productos
    }
    C[i][j] = suma; // asignamos resultado
  }
}

// Mostramos matrices y resultado
console.log("Matriz A:", A);
console.log("Matriz B:", B);
console.log("Resultado de la multiplicación:", C);
