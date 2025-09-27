// 59. Números Perfectos
// Encuentra números perfectos hasta un límite dado.

// Pedimos el límite
let limite = parseInt(prompt("Ingrese el límite superior:"));

// Validamos
if (isNaN(limite) || limite <= 0) {
  console.log("Número inválido.");
} else {
  console.log(`Números perfectos hasta ${limite}:`);

  // Recorremos del 2 hasta el límite
  for (let num = 2; num <= limite; num++) {
    let sumaDivisores = 1; // siempre incluye 1

    // Buscamos divisores
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        sumaDivisores += i;
      }
    }

    // Verificamos si es perfecto
    if (sumaDivisores === num) {
      console.log(num);
    }
  }
}
