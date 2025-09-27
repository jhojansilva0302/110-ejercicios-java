// 39. Conversor de Bases
// Convierte un número entre binario, decimal y hexadecimal.

// Pedimos el número como texto
let numero = prompt("Ingrese el número a convertir:");

// Pedimos la base de origen
let baseOrigen = parseInt(prompt("Ingrese la base de origen (2, 10, 16):"));

// Pedimos la base destino
let baseDestino = parseInt(prompt("Ingrese la base destino (2, 10, 16):"));

// Intentamos convertir
let decimal = parseInt(numero, baseOrigen);

// Verificamos que sea válido
if (isNaN(decimal)) {
  console.log("Número inválido para la base indicada.");
} else {
  // Convertimos al sistema destino
  let convertido = decimal.toString(baseDestino);
  console.log(`${numero} en base ${baseOrigen} equivale a ${convertido} en base ${baseDestino}`);
}
