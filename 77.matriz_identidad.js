// 77. Matriz Identidad
// Genera una matriz identidad de tamaño n

// Pedimos el tamaño de la matriz
let n = parseInt(prompt("Ingrese el tamaño de la matriz identidad:"));

// Creamos la matriz identidad vacía
let identidad = [];

// Recorremos filas
for (let i = 0; i < n; i++) {
  identidad[i] = []; // creamos una fila vacía
  for (let j = 0; j < n; j++) {
    if (i === j) {
      identidad[i][j] = 1; // en la diagonal principal ponemos 1
    } else {
      identidad[i][j] = 0; // en el resto ponemos 0
    }
  }
}

// Mostramos la matriz identidad
console.log(`Matriz identidad de tamaño ${n}:`, identidad);
