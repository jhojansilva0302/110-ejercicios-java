// 36. Clasificador de Triángulos
// Clasifica un triángulo según sus lados: equilátero, isósceles o escaleno.

// Pedimos los tres lados al usuario
let lado1 = parseFloat(prompt("Ingrese el primer lado:"));
let lado2 = parseFloat(prompt("Ingrese el segundo lado:"));
let lado3 = parseFloat(prompt("Ingrese el tercer lado:"));

// Validamos que sean positivos
if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
  // Verificamos la condición de existencia de triángulo
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("El triángulo es equilátero."); // todos los lados iguales
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      console.log("El triángulo es isósceles."); // dos lados iguales
    } else {
      console.log("El triángulo es escaleno."); // todos diferentes
    }
  } else {
    console.log("Los lados no forman un triángulo válido.");
  }
} else {
  console.log("Los lados deben ser mayores que cero.");
}
