// 95. Función de Búsqueda Binaria
// Busca un número dentro de un array ordenado

// Función búsqueda binaria
function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) {
      return medio; // encontrado
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1; // buscar en la mitad derecha
    } else {
      fin = medio - 1; // buscar en la mitad izquierda
    }
  }

  return -1; // no encontrado
}

// Ejemplo de uso
let numeros = [1, 3, 5, 7, 9, 11, 13];
console.log("Array:", numeros);
console.log("Buscar 7:", busquedaBinaria(numeros, 7));
console.log("Buscar 4:", busquedaBinaria(numeros, 4));
