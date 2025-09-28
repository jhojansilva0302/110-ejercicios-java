// 59. Números Perfectos
// Encuentra números perfectos hasta un límite dado

// Límite máximo hasta donde buscar
let limite = 1000; // <- puedes cambiar el valor según necesites

// Validamos la entrada
if (isNaN(limite) || limite <= 0) {
  console.log("Número inválido.");
} else {
  console.log(`Números perfectos hasta ${limite}:`);

  // Recorremos los números desde 2 hasta el límite
  for (let num = 2; num <= limite; num++) {
    let sumaDivisores = 1; // 1 siempre es divisor

    // Sumamos los divisores propios
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        sumaDivisores += i;
      }
    }

    // Verificamos si el número es perfecto
    if (sumaDivisores === num) {
      console.log(num);
    }
  }
}
