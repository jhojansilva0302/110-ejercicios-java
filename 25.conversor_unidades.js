// 25. Conversor de Unidades
// Convierte entre diferentes unidades de medida (ejemplo: metros, kilómetros, centímetros)

// Pedimos la cantidad
let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));

// Pedimos la unidad de origen
let origen = prompt("Ingrese la unidad de origen (m, km, cm):").toLowerCase();

// Pedimos la unidad de destino
let destino = prompt("Ingrese la unidad de destino (m, km, cm):").toLowerCase();

// Convertimos primero todo a metros como base
let enMetros;
switch (origen) {
    case "m":
        enMetros = cantidad;
        break;
    case "km":
        enMetros = cantidad * 1000;
        break;
    case "cm":
        enMetros = cantidad / 100;
        break;
    default:
        console.log("Unidad de origen inválida.");
}

// Ahora convertimos de metros a la unidad destino
let resultado;
switch (destino) {
    case "m":
        resultado = enMetros;
        break;
    case "km":
        resultado = enMetros / 1000;
        break;
    case "cm":
        resultado = enMetros * 100;
        break;
    default:
        console.log("Unidad de destino inválida.");
}

// Mostramos el resultado si se calcularon valores válidos
if (resultado !== undefined) {
    console.log(cantidad + " " + origen + " equivalen a " + resultado + " " + destino);
}
