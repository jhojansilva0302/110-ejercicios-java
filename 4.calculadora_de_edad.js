// 4. Calculadora de Edad
// Pide el año de nacimiento y calcula la edad actual.

// Obtenemos el año actual usando Date
let añoActual = new Date().getFullYear();

// Pedimos el año de nacimiento
let añoNacimiento = parseInt(10);

// Calculamos la edad restando el año actual menos el de nacimiento
let edad = añoActual - añoNacimiento;

// Mostramos el resultado
console.log("Su edad actual es: " + edad + " años.");
