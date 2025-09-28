// 65. Array Invertido

// Definimos un array
let datos = [10, 20, 30, 40, 50];

// Creamos un nuevo array para el invertido
let invertido = [];

// Recorremos desde el último hasta el primero
for (let i = datos.length - 1; i >= 0; i--) {
  invertido.push(datos[i]);
}

// Mostramos resultados
console.log("Array original:", datos);
console.log("Array invertido:", invertido);
