// 36. Clasificador de Triángulos
// Clasifica un triángulo según sus lados: equilátero, isósceles o escaleno

// Definimos los tres lados del triángulo
let lado1 = 5;
let lado2 = 5;
let lado3 = 8;

// Validamos que todos los lados sean positivos
if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
  // Verificamos la condición de existencia de triángulo
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    // Clasificamos según los lados
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("El triángulo es equilátero."); // tres lados iguales
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      console.log("El triángulo es isósceles."); // dos lados iguales
    } else {
      console.log("El triángulo es escaleno."); // todos los lados diferentes
    }
  } else {
    console.log("Los lados no forman un triángulo válido."); // no cumple desigualdad triangular
  }
} else {
  console.log("Los lados deben ser mayores que cero."); // validación básica
}
