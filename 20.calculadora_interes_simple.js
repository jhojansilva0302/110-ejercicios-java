// 20. Calculadora de Interés Simple
// Fórmula: I = C * r * t

// Definimos el capital (cantidad de dinero inicial)
let capital = 1000; // Puedes cambiarlo por cualquier valor

// Definimos la tasa de interés en decimal (ej: 0.05 para 5%)
let tasa = 0.05; // 5% de interés

// Definimos el tiempo en años
let tiempo = 2; // Por ejemplo, 2 años

// Calculamos el interés simple
let interes = capital * tasa * tiempo;

// Mostramos los resultados en consola
console.log("Capital: $" + capital);
console.log("Tasa: " + (tasa * 100) + "%");
console.log("Tiempo: " + tiempo + " años");
console.log("Interés generado: $" + interes);
