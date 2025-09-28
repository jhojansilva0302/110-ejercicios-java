// 12. Contador de Dígitos
// Este programa cuenta cuántos dígitos tiene un número dado

// Definimos el número que queremos analizar
let numero = 100030;   // Puedes cambiarlo por cualquier número

// Convertimos el número a una cadena de texto (string)
// Esto es necesario porque los números no tienen la propiedad .length
let cantidadDigitos = numero.toString().length;

// Mostramos el resultado en consola
console.log("El número tiene " + cantidadDigitos + " dígitos."); 
// Ejemplo de salida: "El número tiene 6 dígitos."
