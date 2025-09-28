// 43. Factorial con For
// Calcula el factorial de un número usando bucle for.

// Pedimos el número
let num = parseInt(10);

// Validamos
if (isNaN(num) || num < 0) {
  console.log("Número inválido.");
} else {
  let factorial = 1;
  // Multiplicamos desde 1 hasta num
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`${num}! = ${factorial}`);
}
