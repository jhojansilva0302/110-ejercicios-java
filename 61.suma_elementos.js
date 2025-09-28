// 61. Suma de Elementos
// Suma todos los elementos de un array

// Definimos un array con algunos números
let numeros = [5, 10, 15, 20, 25];

// Inicializamos la variable suma en 0
let suma = 0;

// Recorremos el array con un bucle for
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i]; // sumamos el elemento actual
}

// Mostramos el array original
console.log("Array:", numeros);

// Mostramos la suma de los elementos
console.log("Suma de elementos:", suma);
