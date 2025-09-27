// 78. Simetría de Matriz
// Verifica si una matriz cuadrada es simétrica

// Definimos una matriz cuadrada
let matriz = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6]
];

// Variable para indicar si es simétrica
let simetrica = true;

// Recorremos solo la mitad superior (sin repetir comparaciones)
for (let i = 0; i < matriz.length; i++) {
  for (let j = i + 1; j < matriz.length; j++) {
    if (matriz[i][j] !== matriz[j][i]) {
      simetrica = false; // si encontramos una diferencia, no es simétrica
      break;
    }
  }
}

// Mostramos la matriz original
console.log("Matriz:", matriz);

// Mostramos si es simétrica o no
console.log("¿Es simétrica?:", simetrica);
