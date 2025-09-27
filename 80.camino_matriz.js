// 80. Camino en Matriz
// Encuentra caminos posibles en una matriz desde la esquina superior izquierda
// hasta la esquina inferior derecha, moviéndose solo a la derecha o hacia abajo.

// Definimos el tamaño de la matriz (ejemplo: 3x3)
let n = 3;

// Función recursiva para contar caminos
function contarCaminos(i, j, n) {
  // Si llegamos al borde de la matriz
  if (i === n - 1 && j === n - 1) {
    return 1; // hay un camino válido
  }
  if (i >= n || j >= n) {
    return 0; // fuera de los límites
  }

  // Sumamos los caminos moviéndose hacia abajo y hacia la derecha
  return contarCaminos(i + 1, j, n) + contarCaminos(i, j + 1, n);
}

// Llamamos a la función desde la esquina (0,0)
let caminos = contarCaminos(0, 0, n);

// Mostramos el tamaño de la matriz
console.log(`Matriz de tamaño ${n}x${n}`);

// Mostramos la cantidad de caminos posibles
console.log("Caminos posibles:", caminos);
