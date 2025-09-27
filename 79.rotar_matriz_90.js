// 79. Rotar Matriz 90°
// Rota una matriz 90 grados en sentido horario

// Definimos una matriz cuadrada
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Creamos una nueva matriz vacía para la rotación
let rotada = [];

// Recorremos columnas y filas
for (let i = 0; i < matriz.length; i++) {
  rotada[i] = []; // inicializamos la fila
  for (let j = 0; j < matriz.length; j++) {
    rotada[i][j] = matriz[matriz.length - j - 1][i]; 
    // tomamos elementos en orden girado
  }
}

// Mostramos la matriz original
console.log("Matriz original:", matriz);

// Mostramos la matriz rotada
console.log("Matriz rotada 90°:", rotada);
