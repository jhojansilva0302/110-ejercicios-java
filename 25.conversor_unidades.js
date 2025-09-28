// 25. Conversor de Unidades
// Este programa convierte entre diferentes unidades de longitud (metros, kilómetros, centímetros)

// Definimos la cantidad a convertir
let cantidad = 1500; // Ejemplo: 1500 unidades

// Definimos la unidad de origen y la unidad de destino
let origen = "cm";   // Puede ser "m", "km" o "cm"
let destino = "m";   // Puede ser "m", "km" o "cm"

// Convertimos a minúsculas para evitar errores con mayúsculas
origen = origen.toLowerCase();
destino = destino.toLowerCase();

// Convertimos primero todo a metros como unidad base
let enMetros;
switch (origen) {
    case "m":
        enMetros = cantidad;
        break;
    case "km":
        enMetros = cantidad * 1000; // 1 km = 1000 m
        break;
    case "cm":
        enMetros = cantidad / 100;  // 1 cm = 0.01 m
        break;
    default:
        console.log("Unidad de origen inválida.");
}

// Convertimos de metros a la unidad de destino
let resultado;
switch (destino) {
    case "m":
        resultado = enMetros;
        break;
    case "km":
        resultado = enMetros / 1000; // Convertimos metros a km
        break;
    case "cm":
        resultado = enMetros * 100;  // Convertimos metros a cm
        break;
    default:
        console.log("Unidad de destino inválida.");
}

// Mostramos el resultado si todo fue válido
if (resultado !== undefined) {
    console.log(cantidad + " " + origen + " equivalen a " + resultado + " " + destino);
}
