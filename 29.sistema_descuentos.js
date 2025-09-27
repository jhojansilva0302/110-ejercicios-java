// 29. Sistema de Descuentos
// Aplica descuentos diferentes según categoría de cliente

// Pedimos la categoría
let categoria = prompt("Ingrese la categoría del cliente (A, B, C):").toUpperCase();

// Pedimos el valor de la compra
let compra = parseFloat(prompt("Ingrese el valor de la compra:"));

// Definimos el descuento
let descuento = 0;

// Usamos switch para asignar el descuento
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
        console.log("Categoría inválida.");
}

// Si el descuento es válido, calculamos el precio final
if (descuento > 0) {
    let total = compra - (compra * descuento);
    console.log("Categoría: " + categoria);
    console.log("Compra: $" + compra);
    console.log("Descuento: " + (descuento * 100) + "%");
    console.log("Total a pagar: $" + total);
}
