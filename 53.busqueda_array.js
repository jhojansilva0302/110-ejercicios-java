// 53. Búsqueda en Array
// Busca un elemento en un array y dice si existe o no

// Definimos un array de ejemplo
let arreglo = [10, 20, 30, 40, 50];

// Definimos el número a buscar
let buscar = 30; // ejemplo: 30

// Buscamos el número en el array usando indexOf
if (arreglo.indexOf(buscar) !== -1) {
  console.log(`El número ${buscar} se encuentra en el array ✅`);
} else {
  console.log(`El número ${buscar} NO se encuentra en el array ❌`);
}
