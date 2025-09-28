// 72. Pares que Suman
// Encuentra pares de números que sumen un valor dado

// Definimos un array
let array = [1, 2, 3, 4, 5, 6];

// Valor objetivo
let objetivo = 10;

// Variable para saber si encontramos algún par
let encontrado = false;

// Recorremos el array buscando pares
console.log(`Array: ${array}`);
console.log(`Valor objetivo: ${objetivo}`);
console.log("Pares que suman el valor objetivo:");

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === objetivo) {
      console.log(`(${array[i]}, ${array[j]})`);
      encontrado = true;
    }
  }
}

if (!encontrado) {
  console.log("No se encontraron pares que sumen el valor objetivo.");
}
