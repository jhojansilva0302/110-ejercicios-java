// 92. Generador de Tablas
// Función que genera la tabla de multiplicar de un número

// Función que genera la tabla de multiplicar hasta 10
function tablaMultiplicar(num) {
  console.log(`\nTabla del ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Número de ejemplo
let numero = 7;

// Llamamos a la función
tablaMultiplicar(numero);
