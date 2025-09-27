// 28. Calculadora de Salario
// Calcula salario según horas trabajadas y tipo de empleado

// Pedimos horas trabajadas
let horas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));

// Pedimos tipo de empleado
let tipo = prompt("Ingrese el tipo de empleado (normal/extra):").toLowerCase();

// Definimos la tarifa base
let tarifaNormal = 10000; // por hora
let tarifaExtra = 15000;  // por hora

// Usamos switch para calcular el salario
switch (tipo) {
    case "normal":
        console.log("Salario: $" + (horas * tarifaNormal));
        break;
    case "extra":
        console.log("Salario: $" + (horas * tarifaExtra));
        break;
    default:
        console.log("Tipo de empleado no válido.");
}
