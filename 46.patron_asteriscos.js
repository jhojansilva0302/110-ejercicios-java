// 46. Patrón de Asteriscos
// Crea diferentes patrones con asteriscos usando bucles.

// Pedimos la cantidad de filas
let filas = parseInt(prompt("Ingrese el número de filas para el patrón:"));

// Validamos
if (isNaN(filas) || filas <= 0) {
  console.log("Número inválido.");
} else {
  console.log("Patrón en forma de triángulo:");

  // Triángulo creciente
  for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += "*";
    }
    console.log(linea);
  }

  console.log("Patrón en forma de triángulo invertido:");

  // Triángulo decreciente
  for (let i = filas; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += "*";
    }
    console.log(linea);
  }
}
