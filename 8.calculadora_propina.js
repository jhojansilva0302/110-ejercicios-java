// 8. Calculadora de Propina
// Calcula diferentes porcentajes de propina para una cuenta

// Pedimos el valor de la cuenta
let cuenta = parseFloat(prompt("Ingrese el valor de la cuenta:"));

// Definimos los porcentajes de propina comunes
let propina10 = cuenta * 0.10;
let propina15 = cuenta * 0.15;
let propina20 = cuenta * 0.20;

// Mostramos las opciones de propina
console.log("Cuenta: $" + cuenta);
console.log("Propina 10%: $" + propina10);
console.log("Propina 15%: $" + propina15);
console.log("Propina 20%: $" + propina20);
