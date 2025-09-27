// 104. Año Bisiesto con operador ternario compacto

let anio = 2024;

// Ternario para determinar si es bisiesto
let esBisiesto = 
  (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) 
  ? "Bisiesto" 
  : "No bisiesto";

console.log(`${anio} es: ${esBisiesto}`);
