// 106. Conversión de nota numérica a letra con ternario

let nota = 82;

// Ternario anidado
let letra = 
  (nota >= 90) ? "A" :
  (nota >= 80) ? "B" :
  (nota >= 70) ? "C" :
  (nota >= 60) ? "D" : "F";

console.log(`Nota: ${nota} → Calificación: ${letra}`);
