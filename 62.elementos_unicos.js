// 62. Elementos Únicos
// Muestra los elementos que aparecen solo una vez en un array

// Definimos un array con algunos elementos repetidos
let arreglo = [1, 2, 2, 3, 4, 4, 5];

// Creamos un objeto para contar repeticiones
let contador = {};

// Recorremos el array para contar ocurrencias
for (let i = 0; i < arreglo.length; i++) {
  let valor = arreglo[i]; // tomamos el valor actual
  contador[valor] = (contador[valor] || 0) + 1; // sumamos 1 al contador
}

// Creamos un array para guardar los elementos únicos
let unicos = [];

// Recorremos el objeto contador
for (let clave in contador) {
  if (contador[clave] === 1) { // si aparece solo una vez
    unicos.push(Number(clave)); // lo guardamos como número
  }
}

// Mostramos el array original
console.log("Array:", arreglo);

// Mostramos los elementos únicos
console.log("Elementos únicos:", unicos);
