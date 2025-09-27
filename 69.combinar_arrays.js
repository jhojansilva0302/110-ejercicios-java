// 69. Combinar Arrays
// Combina dos arrays ordenados en uno solo ordenado

// Definimos dos arrays ya ordenados
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

// Concatenamos ambos arrays
let combinado = arr1.concat(arr2);

// Ordenamos el array resultante en orden ascendente
combinado.sort((a, b) => a - b);

// Mostramos los arrays originales
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

// Mostramos el array combinado ordenado
console.log("Array combinado:", combinado);
