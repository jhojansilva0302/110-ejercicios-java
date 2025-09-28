// 44. Números Pares
// Imprime los primeros n números pares

// Definimos la cantidad de números pares a mostrar
let cantidad = 5; // ejemplo: mostrar los primeros 5 números pares

// Validamos que la cantidad sea positiva
if (isNaN(cantidad) || cantidad <= 0) {
  console.log("Número inválido.");
} else {
  console.log(`Primeros ${cantidad} números pares:`);
  // Generamos números pares con un bucle for
  for (let i = 1; i <= cantidad; i++) {
    console.log(i * 2);
  }
}
