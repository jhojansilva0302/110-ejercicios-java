// 37. Calculadora de Calorías
// Calcula calorías quemadas según actividad física y tiempo.

// Pedimos el tipo de actividad
let actividad = prompt("Ingrese la actividad (correr, nadar, ciclismo):").toLowerCase();

// Pedimos el tiempo en minutos
let minutos = parseInt(prompt("Ingrese el tiempo en minutos:"));

// Definimos tasa de calorías por minuto para cada actividad
let caloriasPorMinuto;

switch (actividad) {
  case "correr":
    caloriasPorMinuto = 10; // 10 calorías por minuto
    break;
  case "nadar":
    caloriasPorMinuto = 8; // 8 calorías por minuto
    break;
  case "ciclismo":
    caloriasPorMinuto = 6; // 6 calorías por minuto
    break;
  default:
    caloriasPorMinuto = 0; // actividad no válida
    console.log("Actividad no reconocida.");
}

// Si es válida, calculamos calorías totales
if (caloriasPorMinuto > 0 && minutos > 0) {
  let total = caloriasPorMinuto * minutos;
  console.log(`Calorías quemadas: ${total}`);
}
