// 47. Serie Numérica
// Genera una serie de números (ejemplo: 2, 4, 6, 8...)

// Definimos cuántos números mostrar
let cantidad = 10; // ejemplo: mostrar los primeros 10 números

// Validamos que la cantidad sea positiva
if (isNaN(cantidad) || cantidad <= 0) {
  console.log("Número inválido.");
} else {
  console.log("Serie de números pares:");
  // Generamos la serie usando un bucle for
  for (let i = 1; i <= cantidad; i++) {
    console.log(i * 2); // múltiplos de 2
  }
}
