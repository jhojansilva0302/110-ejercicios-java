// 44. Números Pares
// Imprime los primeros n números pares.

// Pedimos n
let cantidad = parseInt(prompt("Ingrese la cantidad de números pares a mostrar:"));

// Validamos
if (isNaN(cantidad) || cantidad <= 0) {
  console.log("Número inválido.");
} else {
  console.log(`Primeros ${cantidad} números pares:`);
  // Generamos pares con un for
  for (let i = 1; i <= cantidad; i++) {
    console.log(i * 2);
  }
}
