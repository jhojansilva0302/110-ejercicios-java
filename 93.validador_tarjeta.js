// 93. Validador de Tarjeta
// Algoritmo de Luhn para validar números de tarjeta de crédito

// Función que aplica el algoritmo de Luhn
function validarTarjeta(numero) {
  let suma = 0;
  let alternar = false;

  // Recorremos el número de derecha a izquierda
  for (let i = numero.length - 1; i >= 0; i--) {
    let digito = parseInt(numero[i]);

    if (alternar) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }

    suma += digito;
    alternar = !alternar;
  }

  // Es válido si el total es múltiplo de 10
  return (suma % 10 === 0);
}

// Número de tarjeta de ejemplo
let tarjeta = "4539578763621486";

// Mostramos el número y si es válido
console.log("Número de tarjeta:", tarjeta);
console.log("¿Es válida la tarjeta?", validarTarjeta(tarjeta) ? "✅ Válida" : "❌ No válida");
