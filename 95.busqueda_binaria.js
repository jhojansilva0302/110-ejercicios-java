// 95. Función de Búsqueda Binaria
// Busca un número dentro de un array ordenado

// Función búsqueda binaria
function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) {
      return medio; // índice encontrado
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1; // buscar en la mitad derecha
    } else {
      fin = medio - 1; // buscar en la mitad izquierda
    }
  }

  return -1; // no encontrado
}

// Array de ejemplo
let numeros = [1, 3, 5, 7, 9, 11, 13];

// Mostramos el array
console.log("Array ordenado:", numeros);

// Ejemplos de búsqueda
let buscar1 = 7;
let buscar2 = 4;

console.log("Buscar", buscar1 + ":", busquedaBinaria(numeros, buscar1));
console.log("Buscar", buscar2 + ":", busquedaBinaria(numeros, buscar2));
