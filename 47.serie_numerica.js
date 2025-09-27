// 47. Serie Numérica
// Genera una serie de números (ejemplo: 2, 4, 6, 8...).

// Pedimos cuántos números mostrar
let cantidad = parseInt(prompt("Ingrese la cantidad de números de la serie:"));

// Validamos
if (isNaN(cantidad) || cantidad <= 0) {
  console.log("Número inválido.");
} else {
  console.log("Serie: ");
  for (let i = 1; i <= cantidad; i++) {
    console.log(i * 2); // múltiplos de 2
  }
}
