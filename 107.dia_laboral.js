let dia = "domingo"; // prueba con "lunes", "sábado", etc.

// Pasamos a minúsculas para evitar errores
dia = dia.toLowerCase();

// Array con los días del fin de semana
const finDeSemana = ["sábado", "sabado", "domingo"];

// Usamos ternario
let tipoDia = finDeSemana.includes(dia) ? "Fin de semana" : "Día laboral";

console.log(`${dia} es: ${tipoDia}`);
