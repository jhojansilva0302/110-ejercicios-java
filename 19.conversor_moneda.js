// 19. Conversor de Moneda
// Este programa convierte un monto entre diferentes monedas (USD, EUR, COP)

// Definimos el monto a convertir
let monto = 10; // Puedes cambiarlo por cualquier cantidad

// Definimos la moneda de origen y la moneda de destino
let origen = "USD";   // Ejemplo: USD, EUR, COP
let destino = "EUR";  // Ejemplo: USD, EUR, COP

// Convertimos a mayúsculas para evitar errores con minúsculas
origen = origen.toUpperCase();
destino = destino.toUpperCase();

// Definimos las tasas de conversión (ficticias)
let tasas = {
    "USD": { "EUR": 0.92, "COP": 4000 },
    "EUR": { "USD": 1.09, "COP": 4400 },
    "COP": { "USD": 0.00025, "EUR": 0.00023 }
};

// Verificamos si existe la conversión en el objeto tasas
if (tasas[origen] && tasas[origen][destino]) {
    // Calculamos el monto convertido
    let convertido = monto * tasas[origen][destino];
    // Mostramos el resultado en consola
    console.log(monto + " " + origen + " equivalen a " + convertido + " " + destino);
} else {
    // Si no existe la tasa de conversión, mostramos un mensaje de error
    console.log("Conversión no disponible.");
}
