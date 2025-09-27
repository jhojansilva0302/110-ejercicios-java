// 64. Unión e Intersección

// Definimos dos arrays de ejemplo
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// Usamos un Set para unir ambos arrays sin duplicados
let union = [...new Set([...arr1, ...arr2])];

// Usamos filter para buscar los elementos en común (intersección)
let interseccion = arr1.filter(x => arr2.includes(x));

// Mostramos los arrays originales
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

// Mostramos la unión de los arrays
console.log("Unión:", union);

// Mostramos la intersección
console.log("Intersección:", interseccion);
