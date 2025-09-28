// 28. Calculadora de Salario
// Este programa calcula el salario según las horas trabajadas y el tipo de empleado

// Definimos las horas trabajadas
let horas = 8; // Ejemplo: 8 horas

// Definimos el tipo de empleado
let tipo = "extra"; // Puede ser "normal" o "extra"

// Convertimos a minúsculas para evitar errores con mayúsculas
tipo = tipo.toLowerCase();

// Definimos las tarifas por hora
let tarifaNormal = 10000; // por hora
let tarifaExtra = 15000;  // por hora

// Usamos switch para calcular el salario según el tipo de empleado
switch (tipo) {
    case "normal":
        console.log("Salario: $" + (horas * tarifaNormal));
        break;
    case "extra":
        console.log("Salario: $" + (horas * tarifaExtra));
        break;
    default:
        console.log("Tipo de empleado no válido."); // Si no es "normal" ni "extra"
}
