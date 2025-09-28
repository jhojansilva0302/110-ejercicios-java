// 66. Matriz Transpuesta

// Definimos una matriz de 3x3
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Creamos una matriz vacía para la transpuesta
let transpuesta = [];

// Recorremos columnas como si fueran filas
for (let i = 0; i < matriz[0].length; i++) {
  transpuesta[i] = [];
  for (let j = 0; j < matriz.length; j++) {
    transpuesta[i][j] = matriz[j][i];
  }
}

// Mostramos resultados
console.log("Matriz original:", matriz);
console.log("Matriz transpuesta:", transpuesta);
