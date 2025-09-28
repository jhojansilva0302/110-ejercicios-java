// 60. Criba de Eratóstenes
// Encuentra todos los números primos hasta un número n

// Número límite hasta donde buscar primos
let n = 100; // <- puedes cambiar el valor según necesites

// Validamos la entrada
if (isNaN(n) || n < 2) {
  console.log("Número inválido.");
} else {
  // Inicializamos un array de booleanos (true = primo)
  let esPrimo = new Array(n + 1).fill(true);
  esPrimo[0] = esPrimo[1] = false; // 0 y 1 no son primos

  // Aplicamos la criba de Eratóstenes
  for (let i = 2; i * i <= n; i++) {
    if (esPrimo[i]) {
      for (let j = i * i; j <= n; j += i) {
        esPrimo[j] = false; // marcamos múltiplos como no primos
      }
    }
  }

  // Recolectamos los números primos
  let primos = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo[i]) primos.push(i);
  }

  console.log(`Primos hasta ${n}:`, primos);
}
