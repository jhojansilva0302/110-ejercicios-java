// 38. Sistema de Puntos
// Asigna puntos según compras y muestra beneficios alcanzados.

// Pedimos el valor de la compra
let compra = parseFloat(prompt("Ingrese el valor de la compra:"));

// Calculamos puntos: 1 punto por cada $1000
let puntos = Math.floor(compra / 1000);

// Mostramos puntos obtenidos
console.log(`Has acumulado ${puntos} puntos.`);

// Determinamos beneficio según puntos
if (puntos >= 100) {
  console.log("Beneficio: Descuento del 20% en la próxima compra.");
} else if (puntos >= 50) {
  console.log("Beneficio: Descuento del 10% en la próxima compra.");
} else if (puntos >= 20) {
  console.log("Beneficio: Cupón de $5000.");
} else {
  console.log("Aún no tienes beneficios, sigue comprando.");
}
