// 105. Clasificación por edad con ternario

let edad = 17;

// Ternario anidado para clasificar
let categoria = 
  (edad < 12) ? "Niño" :
  (edad < 18) ? "Adolescente" :
  (edad < 60) ? "Adulto" :
  "Adulto mayor";

console.log(`Edad: ${edad} → Categoría: ${categoria}`);
