// 70. Elementos Faltantes
// Encuentra los números faltantes en una secuencia

// Definimos un array con números, pero con huecos
let numeros = [1, 2, 4, 6, 7, 10];

// Encontramos el valor máximo del array
let max = Math.max(...numeros);

// Creamos un array vacío para guardar los faltantes
let faltantes = [];

// Recorremos desde 1 hasta el número máximo
for (let i = 1; i <= max; i++) {
  if (!numeros.includes(i)) {
    faltantes.push(i);
  }
}

// Mostramos resultados
console.log("Array original:", numeros);
console.log("Elementos faltantes:", faltantes);
