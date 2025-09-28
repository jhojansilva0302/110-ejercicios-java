// 55. Máximo y Mínimo
// Encuentra el valor máximo y mínimo en un array

// Definimos un array de ejemplo
let datos = [15, 3, 27, 8, 42, -5, 19];

// Inicializamos máximo y mínimo con el primer elemento
let max = datos[0];
let min = datos[0];

// Recorremos el array para encontrar máximo y mínimo
for (let i = 1; i < datos.length; i++) {
  if (datos[i] > max) {
    max = datos[i]; // actualizamos máximo
  }
  if (datos[i] < min) {
    min = datos[i]; // actualizamos mínimo
  }
}

// Mostramos resultados
console.log("Array:", datos);
console.log("Valor máximo:", max);
console.log("Valor mínimo:", min);
