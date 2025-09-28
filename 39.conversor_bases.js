// 39. Conversor de Bases
// Convierte un número entre binario, decimal y hexadecimal

// Definimos el número como string (para evitar problemas con bases)
let numero = "1010"; // ejemplo: binario 1010

// Definimos la base de origen y destino
let baseOrigen = 2;   // 2 = binario, 10 = decimal, 16 = hexadecimal
let baseDestino = 10; // 2 = binario, 10 = decimal, 16 = hexadecimal

// Convertimos el número a decimal
let decimal = parseInt(numero, baseOrigen);

// Verificamos que la conversión sea válida
if (isNaN(decimal)) {
  console.log("Número inválido para la base indicada.");
} else {
  // Convertimos al sistema destino
  let convertido = decimal.toString(baseDestino);
  console.log(`${numero} en base ${baseOrigen} equivale a ${convertido} en base ${baseDestino}`);
}
