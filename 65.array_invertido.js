// 65. Array Invertido

// Definimos un array
let datos = [10, 20, 30, 40, 50];

// Creamos un nuevo array vacío para guardar el invertido
let invertido = [];

// Recorremos el array desde el último hasta el primero
for (let i = datos.length - 1; i >= 0; i--) {
  invertido.push(datos[i]); // agregamos cada elemento al nuevo array
}

// Mostramos el array original
console.log("Array original:", datos);

// Mostramos el array invertido
console.log("Array invertido:", invertido);
