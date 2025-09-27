// 103. Signo de Número (positivo, negativo o cero) con ternario

let n = -5;

// Usamos ternario anidado
let signo = (n > 0) ? "Positivo" : (n < 0) ? "Negativo" : "Cero";

console.log(`${n} es: ${signo}`);
