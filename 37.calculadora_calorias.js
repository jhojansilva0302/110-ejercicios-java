// 37. Calculadora de Calorías
// Calcula calorías quemadas según actividad física y tiempo

// Definimos el tipo de actividad
let actividad = "correr"; // puede ser "correr", "nadar" o "ciclismo"
actividad = actividad.toLowerCase(); // normalizamos a minúsculas

// Definimos el tiempo de actividad en minutos
let minutos = 30; // ejemplo: 30 minutos

// Definimos la tasa de calorías por minuto según la actividad
let caloriasPorMinuto;

switch (actividad) {
  case "correr":
    caloriasPorMinuto = 10;
    break;
  case "nadar":
    caloriasPorMinuto = 8;
    break;
  case "ciclismo":
    caloriasPorMinuto = 6;
    break;
  default:
    caloriasPorMinuto = 0;
    console.log("Actividad no reconocida.");
}

// Calculamos calorías totales si la actividad es válida y el tiempo es positivo
if (caloriasPorMinuto > 0 && minutos > 0) {
  let total = caloriasPorMinuto * minutos;
  console.log(`Calorías quemadas: ${total}`);
}
