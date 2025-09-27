// 66. Matriz Transpuesta
// Calcula la transpuesta de una matriz

// Definimos una matriz de 3x3
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Creamos una nueva matriz vacía para la transpuesta
let transpuesta = [];

// Recorremos las columnas como si fueran filas
for (let i = 0; i < matriz[0].length; i++) {
  transpuesta[i] = []; // creamos una nueva fila en la transpuesta
  for (let j = 0; j < matriz.length; j++) {
    transpuesta[i][j] = matriz[j][i]; // invertimos fila por columna
  }
}

// Mostramos la matriz original
console.log("Matriz original:", matriz);

// Mostramos la matriz transpuesta
console.log("Matriz transpuesta:", transpuesta);
