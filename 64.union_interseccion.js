// 64. Unión e Intersección

// Definimos dos arrays de ejemplo
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// Unión sin duplicados usando Set
let union = [...new Set([...arr1, ...arr2])];

// Intersección usando filter
let interseccion = arr1.filter(x => arr2.includes(x));

// Mostramos los resultados
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Resultado de la unión:", union);
console.log("Resultado de la intersección:", interseccion);
