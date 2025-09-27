// 53. Búsqueda en Array
// Busca un elemento en un array y dice si existe o no.

// Definimos un array
let arreglo = [10, 20, 30, 40, 50];

// Pedimos el número a buscar
let buscar = parseInt(prompt("Ingrese un número a buscar en el array:"));

// Buscamos con indexOf
if (arreglo.indexOf(buscar) !== -1) {
  console.log(`El número ${buscar} se encuentra en el array.`);
} else {
  console.log(`El número ${buscar} NO se encuentra en el array.`);
}
