// 29. Sistema de Descuentos
// Este programa aplica descuentos según la categoría del cliente

// Definimos la categoría del cliente
let categoria = "B"; // Puede ser "A", "B" o "C"

// Convertimos a mayúsculas para evitar errores con minúsculas
categoria = categoria.toUpperCase();

// Definimos el valor de la compra
let compra = 500; // Ejemplo: $500

// Inicializamos el descuento
let descuento = 0;

// Usamos switch para asignar el porcentaje de descuento según la categoría
switch (categoria) {
    case "A":
        descuento = 0.20; // 20%
        break;
    case "B":
        descuento = 0.10; // 10%
        break;
    case "C":
        descuento = 0.05; // 5%
        break;
    default:
        console.log("Categoría inválida."); // Si no es A, B ni C
}

// Si el descuento es válido, calculamos el total a pagar
if (descuento > 0) {
    let total = compra - (compra * descuento); // Precio final
    console.log("Categoría: " + categoria);
    console.log("Compra: $" + compra);
    console.log("Descuento: " + (descuento * 100) + "%");
    console.log("Total a pagar: $" + total);
}
