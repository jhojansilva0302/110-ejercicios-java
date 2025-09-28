// 46. Patrón de Asteriscos
// Crea diferentes patrones con asteriscos usando bucles

// Definimos la cantidad de filas del patrón
let filas = 5; // ejemplo: 5 filas

// Validamos que la cantidad sea positiva
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
