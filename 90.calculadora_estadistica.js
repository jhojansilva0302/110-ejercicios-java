// 90. Calculadora Estadística
// Funciones para calcular media, mediana y moda de un conjunto de datos

// Función para calcular la media (promedio)
function media(arr) {
  let suma = arr.reduce((a, b) => a + b, 0);
  return suma / arr.length;
}

// Función para calcular la mediana
function mediana(arr) {
  arr.sort((a, b) => a - b); // ordenamos
  let n = arr.length;
  if (n % 2 === 0) {
    // si hay cantidad par de elementos
    return (arr[n / 2 - 1] + arr[n / 2]) / 2;
  } else {
    // si hay cantidad impar de elementos
    return arr[Math.floor(n / 2)];
  }
}

// Función para calcular la moda
function moda(arr) {
  let frecuencia = {};
  let maxFrecuencia = 0;
  let modas = [];

  // Contamos frecuencias
  for (let num of arr) {
    frecuencia[num] = (frecuencia[num] || 0) + 1;
    if (frecuencia[num] > maxFrecuencia) {
      maxFrecuencia = frecuencia[num];
    }
  }

  // Obtenemos todos los valores con frecuencia máxima
  for (let num in frecuencia) {
    if (frecuencia[num] === maxFrecuencia) {
      modas.push(Number(num));
    }
  }

  return modas;
}

// Ejemplo de uso
let datos = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log("Datos:", datos);
console.log("Media:", media(datos));
console.log("Mediana:", mediana(datos));
console.log("Moda:", moda(datos));
