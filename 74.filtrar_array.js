// 74. Filtrar Array
// Filtra elementos según diferentes criterios

// Definimos un array de números
let numeros = [5, 12, 8, 130, 44];

// Filtramos los números mayores a 10
let mayoresQueDiez = numeros.filter(num => num > 10);

// Mostramos el array original
console.log("Array original:", numeros);

// Mostramos los elementos filtrados
console.log("Mayores que 10:", mayoresQueDiez);
