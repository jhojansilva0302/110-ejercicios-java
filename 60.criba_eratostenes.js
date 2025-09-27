// 60. Criba de Eratóstenes
// Encuentra todos los números primos hasta un número n.

// Pedimos el número límite
let n = parseInt(prompt("Ingrese un número límite:"));

// Validamos
if (isNaN(n) || n < 2) {
  console.log("Número inválido.");
} else {
  // Inicializamos array de booleanos
  let esPrimo = new Array(n + 1).fill(true);
  esPrimo[0] = esPrimo[1] = false; // 0 y 1 no son primos

  // Aplicamos la criba
  for (let i = 2; i * i <= n; i++) {
    if (esPrimo[i]) {
      for (let j = i * i; j <= n; j += i) {
        esPrimo[j] = false; // marcamos múltiplos como no primos
      }
    }
  }

  // Recolectamos primos
  let primos = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo[i]) primos.push(i);
  }

  console.log(`Primos hasta ${n}:`, primos);
}
