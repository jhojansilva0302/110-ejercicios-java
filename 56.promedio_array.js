// 56. Promedio de Array
// Calcula el promedio de los elementos de un array

// Definimos un array de ejemplo
let numeros = [10, 20, 30, 40, 50];

// Inicializamos la variable para la suma
let suma = 0;

// Recorremos el array sumando cada elemento
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

// Calculamos el promedio
let promedio = suma / numeros.length;

// Mostramos resultados
console.log("Array:", numeros);
console.log("Promedio:", promedio);
