let edadCliente = 65;

// Descuento según la edad
// < 18 → 20%, >= 60 → 30%, resto → sin descuento
let descuento = 
  (edadCliente < 18) ? "20% de descuento" :
  (edadCliente >= 60) ? "30% de descuento" :
  "Sin descuento";

console.log(`Edad: ${edadCliente} → ${descuento}`);
