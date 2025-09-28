// 69. Combinar Arrays
// Combina dos arrays ordenados en uno solo ordenado

// Definimos dos arrays ya ordenados
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

// Concatenamos ambos arrays y los ordenamos
let combinado = arr1.concat(arr2).sort((a, b) => a - b);

// Mostramos resultados
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Array combinado ordenado:", combinado);
