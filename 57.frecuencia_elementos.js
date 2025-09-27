// 57. Frecuencia de Elementos
// Cuenta cuántas veces aparece cada elemento en un array.

// Definimos un array con valores repetidos
let elementos = [1, 2, 2, 3, 4, 4, 4, 5];

// Creamos objeto para guardar frecuencias
let frecuencia = {};

// Recorremos el array
for (let i = 0; i < elementos.length; i++) {
  let valor = elementos[i];
  if (frecuencia[valor]) {
    frecuencia[valor]++; // si ya existe, incrementa
  } else {
    frecuencia[valor] = 1; // si no existe, inicializa
  }
}

console.log("Array:", elementos);
console.log("Frecuencia de elementos:", frecuencia);
