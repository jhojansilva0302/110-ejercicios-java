// 56. Promedio de Array
// Calcula el promedio de los elementos de un array.

// Definimos un array de ejemplo
let numeros = [10, 20, 30, 40, 50];

// Inicializamos suma
let suma = 0;

// Recorremos el array sumando
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

// Calculamos promedio
let promedio = suma / numeros.length;

console.log("Array:", numeros);
console.log("Promedio:", promedio);
