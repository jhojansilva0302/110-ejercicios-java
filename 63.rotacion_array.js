// 63. Rotación de Array
// Rota un array hacia la derecha k posiciones

// Definimos un array inicial
let array = [1, 2, 3, 4, 5];

// Pedimos cuántas posiciones queremos rotar
let k = parseInt(2);

// Ajustamos k en caso de que sea mayor al tamaño del array
k = k % array.length;

// Usamos slice para cortar el array desde el final y concatenar
let rotado = array.slice(-k).concat(array.slice(0, -k));

// Mostramos el array original
console.log("Array original:", array);

// Mostramos el resultado rotado
console.log(`Array rotado ${k} posiciones:`, rotado);
