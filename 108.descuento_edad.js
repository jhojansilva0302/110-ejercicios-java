// 108. Descuento por edad con ternario

let edadCliente = 65;

// Ternario anidado para aplicar descuento
let descuento = 
  (edadCliente < 18) ? "20% de descuento" :
  (edadCliente >= 60) ? "30% de descuento" :
  "Sin descuento";

console.log(`Edad: ${edadCliente} → ${descuento}`);
