// 45. Números Primos
// Genera los primeros n números primos.

// Pedimos n
let cantidadPrimos = parseInt(prompt("Ingrese la cantidad de números primos a mostrar:"));

// Validamos
if (isNaN(cantidadPrimos) || cantidadPrimos <= 0) {
  console.log("Número inválido.");
} else {
  let contador = 0; // cuántos primos llevamos
  let numero = 2;   // empezamos desde el primer primo
  console.log(`Primeros ${cantidadPrimos} números primos:`);

  // Mientras no tengamos la cantidad pedida
  while (contador < cantidadPrimos) {
    let esPrimo = true;

    // Verificamos si el número es primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }

    // Si es primo, lo mostramos
    if (esPrimo) {
      console.log(numero);
      contador++;
    }

    numero++; // probamos el siguiente número
  }
}
