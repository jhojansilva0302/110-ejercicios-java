// 32. Sistema de Transporte: Calcula tarifas según medio de transporte y distancia.

// Pedimos al usuario el medio de transporte
let medio = prompt("Ingrese el medio de transporte (taxi, bus, metro):").toLowerCase(); // normaliza a minúsculas

// Pedimos al usuario la distancia a recorrer en kilómetros
let distancia = parseFloat(prompt("Ingrese la distancia en km:")); // convierte a número

// Validamos entrada de distancia
if (isNaN(distancia) || distancia < 0) { // si distancia no es válida
  console.log("Distancia inválida."); // mostramos error
} else { // si distancia válida
  let tarifaPorKm = 0; // inicializamos tarifa por km

  // Asignamos tarifa por km según el medio
  switch (medio) { // evaluamos el medio de transporte
    case "taxi": // si es taxi
      tarifaPorKm = 2000; // tarifa en moneda local por km
      break; // salimos del switch
    case "bus": // si es bus
      tarifaPorKm = 500; // tarifa por km
      break; // salimos del switch
    case "metro": // si es metro
      tarifaPorKm = 700; // tarifa por km
      break; // salimos del switch
    default: // si no coincide con ninguna opción
      console.log("Medio de transporte inválido."); // mostramos error
  }

  // Si tarifaPorKm se asignó (no es 0), calculamos y mostramos el total
  if (tarifaPorKm > 0) { // comprobamos que exista tarifa asignada
    let tarifaTotal = tarifaPorKm * distancia; // multiplicamos tarifa por distancia
    console.log("Medio: " + medio); // mostramos el medio
    console.log("Distancia (km): " + distancia); // mostramos la distancia
    console.log("Tarifa por km: " + tarifaPorKm); // mostramos tarifa por km
    console.log("Tarifa total: " + tarifaTotal); // mostramos tarifa total a pagar
  }
}
