// 32. Sistema de Transporte
// Este programa calcula tarifas según el medio de transporte y la distancia

// Definimos el medio de transporte
let medio = "Taxi"; // Puede ser "taxi", "bus" o "metro"

// Convertimos a minúsculas para normalizar la entrada
medio = medio.toLowerCase();

// Definimos la distancia a recorrer en kilómetros
let distancia = 10; // Ejemplo: 10 km

// Validamos que la distancia sea un número válido y positivo
if (isNaN(distancia) || distancia < 0) {
    console.log("Distancia inválida.");
} else {
    let tarifaPorKm = 0; // Inicializamos la tarifa por km

    // Asignamos tarifa por km según el medio de transporte
    switch (medio) {
        case "taxi":
            tarifaPorKm = 2000; // tarifa por km
            break;
        case "bus":
            tarifaPorKm = 500;  // tarifa por km
            break;
        case "metro":
            tarifaPorKm = 700;  // tarifa por km
            break;
        default:
            console.log("Medio de transporte inválido.");
    }

    // Si la tarifa es válida, calculamos y mostramos el total
    if (tarifaPorKm > 0) {
        let tarifaTotal = tarifaPorKm * distancia; // total a pagar
        console.log("Medio: " + medio);
        console.log("Distancia (km): " + distancia);
        console.log("Tarifa por km: " + tarifaPorKm);
        console.log("Tarifa total: " + tarifaTotal);
    }
}
