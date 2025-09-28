// 77. Matriz Identidad
// Genera una matriz identidad de tamaño n

// Pedimos el tamaño de la matriz
let n = parseInt(10);

// Creamos la matriz identidad vacía
let identidad = [];

// Recorremos filas
for (let i = 0; i < n; i++) {
  identidad[i] = []; // creamos una fila vacía
  for (let j = 0; j < n; j++) {
    identidad[i][j] = (i === j) ? 1 : 0; // 1 en diagonal, 0 en resto
  }
}

// Mostramos la matriz identidad
console.log(`Matriz identidad de tamaño ${n}:`);
for (let fila of identidad) {
  console.log(fila);
}
