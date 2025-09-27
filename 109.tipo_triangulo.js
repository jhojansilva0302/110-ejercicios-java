// 109. Clasificación de triángulos con ternario

let lado1 = 5, lado2 = 5, lado3 = 8;

// Ternario anidado para clasificar
let tipo = 
  (lado1 === lado2 && lado2 === lado3) ? "Equilátero" :
  (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) ? "Isósceles" :
  "Escaleno";

console.log(`Lados: ${lado1}, ${lado2}, ${lado3} → Tipo: ${tipo}`);
