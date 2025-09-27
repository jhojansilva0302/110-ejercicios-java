// 76. Reduce de Array
// Reduce un array a un solo valor usando una función (ejemplo: suma)

// Definimos un array
let numeros = [1, 2, 3, 4, 5];

// Usamos reduce para sumar todos los elementos
let suma = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual; // acumulamos la suma
}, 0); // el acumulador empieza en 0

// Mostramos el array original
console.log("Array:", numeros);

// Mostramos el resultado de la reducción
console.log("Suma con reduce:", suma);
