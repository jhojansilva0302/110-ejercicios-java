// 68. Buscar y Reemplazar
// Busca un valor en un array y lo reemplaza por otro

// Definimos un array
let array = [10, 20, 30, 40, 50];

// Valor que queremos buscar
let buscar = parseInt(prompt("Ingrese el valor a buscar:"));

// Valor por el que lo reemplazaremos
let reemplazo = parseInt(prompt("Ingrese el nuevo valor:"));

// Recorremos el array
for (let i = 0; i < array.length; i++) {
  if (array[i] === buscar) { // si encontramos el valor
    array[i] = reemplazo;    // lo reemplazamos
  }
}

// Mostramos el array resultante
console.log("Array modificado:", array);
