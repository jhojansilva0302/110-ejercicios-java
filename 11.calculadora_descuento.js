// 11. Calculadora de Descuento
// Aplica un descuento porcentual a un precio

// Pedimos el precio original
let precio = parseFloat(10);

// Pedimos el porcentaje de descuento
let descuento = parseFloat(10);

// Calculamos el valor descontado
let valorDescuento = (precio * descuento) / 100;

// Calculamos el precio final
let precioFinal = precio - valorDescuento;

// Mostramos resultados
console.log("Precio original: $" + precio);
console.log("Descuento: " + descuento + "%");
console.log("Precio final: $" + precioFinal);
