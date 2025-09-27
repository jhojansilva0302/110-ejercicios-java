// 72. Pares que Suman
// Encuentra pares de números que sumen un valor dado

// Definimos un array
let array = [1, 2, 3, 4, 5, 6];

// Pedimos el valor objetivo
let objetivo = parseInt(prompt("Ingrese el valor objetivo de la suma:"));

// Recorremos el array buscando pares
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === objetivo) {
      console.log(`Par encontrado: (${array[i]}, ${array[j]})`);
    }
  }
}
