// 41. Tabla de Multiplicar
// Genera la tabla de multiplicar de un número hasta 10.

// Pedimos el número al usuario
let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

// Verificamos que sea válido
if (isNaN(numero)) {
  console.log("Número inválido.");
} else {
  // Recorremos del 1 al 10
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
