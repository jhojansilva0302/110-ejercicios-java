// 33. Conversor de Tiempo
// Este programa convierte entre segundos, minutos y horas

// Definimos el valor a convertir
let valor = 120; // Ejemplo: 120 unidades

// Definimos la unidad de origen y de destino
let unidadOrigen = "s";   // Puede ser "s", "min" o "h"
let unidadDestino = "min"; // Puede ser "s", "min" o "h"

// Normalizamos a minúsculas
unidadOrigen = unidadOrigen.toLowerCase();
unidadDestino = unidadDestino.toLowerCase();

// Validamos que el valor sea un número válido
if (isNaN(valor)) {
    console.log("Valor inválido.");
} else {
    // Convertimos todo primero a segundos como unidad base
    let segundosBase;

    if (unidadOrigen === "s") {
        segundosBase = valor;
    } else if (unidadOrigen === "min") {
        segundosBase = valor * 60;
    } else if (unidadOrigen === "h") {
        segundosBase = valor * 3600;
    } else {
        console.log("Unidad de origen inválida.");
    }

    // Si la conversión a segundos se realizó, convertimos a la unidad destino
    if (segundosBase !== undefined) {
        let resultado;

        if (unidadDestino === "s") {
            resultado = segundosBase;
        } else if (unidadDestino === "min") {
            resultado = segundosBase / 60;
        } else if (unidadDestino === "h") {
            resultado = segundosBase / 3600;
        } else {
            console.log("Unidad de destino inválida.");
        }

        // Mostramos el resultado si todo es válido
        if (resultado !== undefined) {
            console.log(`${valor} ${unidadOrigen} equivalen a ${resultado} ${unidadDestino}`);
        }
    }
}
