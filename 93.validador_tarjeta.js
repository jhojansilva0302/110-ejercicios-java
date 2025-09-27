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

// Ejemplo de uso
console.log("¿Es válida la tarjeta?", validarTarjeta("4539578763621486")); // Visa de prueba
