// 10. Año Bisiesto
// Reglas: Un año es bisiesto si es divisible por 4 pero no por 100,
// salvo que también sea divisible por 400.

// Pedimos un año al usuario
let año = parseInt(2010);

// Verificamos las condiciones
if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log(año + " es un año bisiesto.");
} else {
    console.log(año + " no es un año bisiesto.");
}
