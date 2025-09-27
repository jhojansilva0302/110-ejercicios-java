// 92. Generador de Tablas
// Función que genera la tabla de multiplicar de un número

// Función que genera la tabla de multiplicar hasta 10
function tablaMultiplicar(num) {
  console.log(`Tabla del ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Ejemplo de uso
tablaMultiplicar(7);
