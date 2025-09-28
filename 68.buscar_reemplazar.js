// 68. Buscar y Reemplazar
// Busca un valor en un array y lo reemplaza por otro

// Definimos un array
let array = [10, 20, 30, 40, 50];

// Valor que queremos buscar
let buscar = parseInt(10);

// Valor por el que lo reemplazaremos
let reemplazo = parseInt(10);

// Recorremos el array y reemplazamos si coincide
for (let i = 0; i < array.length; i++) {
  if (array[i] === buscar) {
    array[i] = reemplazo;
  }
}

// Mostramos resultados
console.log("Array original: [10, 20, 30, 40, 50]");
console.log(`Se reemplazó ${buscar} por ${reemplazo}`);
console.log("Array modificado:", array);
