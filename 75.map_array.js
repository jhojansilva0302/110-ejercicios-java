// 75. Map de Array
// Transforma cada elemento de un array según una función

// Definimos un array
let numeros = [1, 2, 3, 4, 5];

// Usamos map para elevar cada número al cuadrado
let cuadrados = numeros.map(num => num * num);

// Mostramos el array original
console.log("Array original:", numeros);

// Mostramos el array transformado
console.log("Array al cuadrado:", cuadrados);
