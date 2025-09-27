// 19. Conversor de Moneda
// Convierte entre diferentes monedas (ejemplo: USD, EUR, COP)

// Pedimos el monto
let monto = parseFloat(prompt("Ingrese el monto a convertir:"));

// Pedimos la moneda de origen
let origen = prompt("Ingrese la moneda de origen (USD, EUR, COP):").toUpperCase();

// Pedimos la moneda de destino
let destino = prompt("Ingrese la moneda de destino (USD, EUR, COP):").toUpperCase();

// Definimos tasas de conversión ficticias
let tasas = {
    "USD": { "EUR": 0.92, "COP": 4000 },
    "EUR": { "USD": 1.09, "COP": 4400 },
    "COP": { "USD": 0.00025, "EUR": 0.00023 }
};

// Verificamos si existe la conversión
if (tasas[origen] && tasas[origen][destino]) {
    let convertido = monto * tasas[origen][destino];
    console.log(monto + " " + origen + " equivalen a " + convertido + " " + destino);
} else {
    console.log("Conversión no disponible.");
}
