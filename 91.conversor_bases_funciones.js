// 91. Conversor de Bases con Funciones
// Convierte un número decimal a diferentes bases (binario, octal, hexadecimal)

// Función que convierte un número a una base específica
function convertirBase(numero, base) {
  return numero.toString(base);
}

// Ejemplo de uso
let numero = 255;
console.log("Número en decimal:", numero);
console.log("Binario:", convertirBase(numero, 2));
console.log("Octal:", convertirBase(numero, 8));
console.log("Hexadecimal:", convertirBase(numero, 16));
