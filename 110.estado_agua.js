// 110. Estado del agua según la temperatura con ternario

let temperatura = 80;

// Ternario anidado para determinar estado
let estado = 
  (temperatura <= 0) ? "Sólido (hielo)" :
  (temperatura < 100) ? "Líquido" :
  "Gaseoso (vapor)";

console.log(`A ${temperatura}°C el agua está en estado: ${estado}`);
