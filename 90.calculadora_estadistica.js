// 90. Calculadora Estadística
// Funciones para calcular media, mediana y moda de un conjunto de datos

// Función para calcular la media (promedio)
function media(arr) {
  let suma = arr.reduce((a, b) => a + b, 0); // sumamos todos los elementos
  return suma / arr.length;                   // dividimos entre la cantidad de elementos
}

// Función para calcular la mediana
function mediana(arr) {
  let arrOrdenado = [...arr].sort((a, b) => a - b); // copiamos y ordenamos el array
  let n = arrOrdenado.length;
  if (n % 2 === 0) {
    // cantidad par: promedio de los dos elementos centrales
    return (arrOrdenado[n / 2 - 1] + arrOrdenado[n / 2]) / 2;
  } else {
    // cantidad impar: elemento central
    return arrOrdenado[Math.floor(n / 2)];
  }
}

// Función para calcular la moda
function moda(arr) {
  let frecuencia = {};       // objeto para contar ocurrencias
  let maxFrecuencia = 0;     // frecuencia máxima encontrada
  let modas = [];            // array para guardar los valores más frecuentes

  // Contamos la frecuencia de cada número
  for (let num of arr) {
    frecuencia[num] = (frecuencia[num] || 0) + 1;
    if (frecuencia[num] > maxFrecuencia) {
      maxFrecuencia = frecuencia[num];
    }
  }

  // Guardamos todos los números que tienen la frecuencia máxima
  for (let num in frecuencia) {
    if (frecuencia[num] === maxFrecuencia) {
      modas.push(Number(num));
    }
  }

  return modas;
}

// Datos de ejemplo
let datos = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// Mostramos resultados
console.log("Conjunto de datos:", datos);
console.log("Media:", media(datos));
console.log("Mediana:", mediana(datos));
console.log("Moda:", moda(datos));
