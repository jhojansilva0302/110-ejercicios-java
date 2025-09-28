// 57. Frecuencia de Elementos
// Cuenta cuántas veces aparece cada elemento en un array

// Definimos un array con valores repetidos
let elementos = [1, 2, 2, 3, 4, 4, 4, 5];

// Creamos un objeto para guardar la frecuencia de cada elemento
let frecuencia = {};

// Recorremos el array y contamos cada elemento
for (let i = 0; i < elementos.length; i++) {
  let valor = elementos[i];
  if (frecuencia[valor]) {
    frecuencia[valor]++; // si ya existe, incrementa
  } else {
    frecuencia[valor] = 1; // si no existe, inicializa
  }
}

// Mostramos resultados
console.log("Array:", elementos);
console.log("Frecuencia de elementos:", frecuencia);
