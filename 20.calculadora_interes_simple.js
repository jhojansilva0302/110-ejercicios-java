// 20. Calculadora de Interés Simple
// Fórmula: I = C * r * t

// Pedimos el capital
let capital = parseFloat(prompt("Ingrese el capital (C):"));

// Pedimos la tasa de interés (en decimal, ej: 0.05 para 5%)
let tasa = parseFloat(prompt("Ingrese la tasa de interés (ej: 0.05 para 5%):"));

// Pedimos el tiempo en años
let tiempo = parseFloat(prompt("Ingrese el tiempo en años:"));

// Calculamos el interés
let interes = capital * tasa * tiempo;

// Mostramos resultados
console.log("Capital: $" + capital);
console.log("Tasa: " + (tasa * 100) + "%");
console.log("Tiempo: " + tiempo + " años");
console.log("Interés generado: $" + interes);
