// 107. Día laboral o fin de semana con ternario

let dia = "domingo"; // prueba con "lunes", "sábado", etc.

// Pasamos a minúsculas para evitar errores
dia = dia.toLowerCase();

// Usamos ternario
let tipoDia = 
  (dia === "sabado" || dia === "sábado" || dia === "domingo") 
  ? "Fin de semana" 
  : "Día laboral";

console.log(`${dia} es: ${tipoDia}`);
