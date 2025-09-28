// 91. Conversor de Bases con Funciones
// Convierte un número decimal a diferentes bases (binario, octal, hexadecimal)

// Función que convierte un número a una base específica
function convertirBase(numero, base) {
  return numero.toString(base);
}

// Número de ejemplo
let numero = 255;

// Mostramos resultados en consola
console.log("Número decimal:", numero);
console.log(`Binario (base 2): ${convertirBase(numero, 2)}`);
console.log(`Octal (base 8): ${convertirBase(numero, 8)}`);
console.log(`Hexadecimal (base 16): ${convertirBase(numero, 16)}`);
