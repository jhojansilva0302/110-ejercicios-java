// 31. Calculadora de Impuestos
// Calcula el valor a pagar con impuesto según la categoría del producto

// Definimos el valor del producto
let valor = 1000; // Ejemplo: $1000

// Definimos la categoría del producto
let categoria = "B"; // Puede ser "A", "B" o "C"

// Convertimos a mayúsculas para evitar errores
categoria = categoria.toUpperCase();

// Variable para guardar el porcentaje de impuesto
let impuesto = 0;

// Usamos switch para asignar el porcentaje de impuesto según categoría
switch (categoria) {
    case "A":
        impuesto = 0.19; // 19%
        break;
    case "B":
        impuesto = 0.10; // 10%
        break;
    case "C":
        impuesto = 0.05; // 5%
        break;
    default:
        console.log("Categoría inválida.");
}

// Si la categoría es válida, calculamos el total a pagar
if (impuesto > 0) {
    let total = valor + (valor * impuesto);
    console.log("Valor del producto: $" + valor);
    console.log("Impuesto (" + (impuesto * 100) + "%): $" + (valor * impuesto));
    console.log("Total a pagar: $" + total);
}

// -----------------------------------------------------------------

// Calculadora de impuestos según rangos de ingreso

// Definimos el ingreso del usuario
let ingreso = 3500000; // Ejemplo: 3.500.000

// Verificamos que el ingreso sea un número válido
if (isNaN(ingreso)) {
    console.log("Ingreso inválido.");
} else {
    let tasa = 0;       // Inicializamos la tasa de impuesto
    let impuestoRango = 0; // Inicializamos el valor del impuesto

    // Asignamos la tasa según rangos de ingreso
    if (ingreso <= 1000000) {
        tasa = 0.05; // 5%
    } else if (ingreso <= 3000000) {
        tasa = 0.10; // 10%
    } else if (ingreso <= 5000000) {
        tasa = 0.15; // 15%
    } else {
        tasa = 0.20; // 20% para ingresos mayores
    }

    // Calculamos el impuesto y el ingreso neto
    impuestoRango = ingreso * tasa;
    let ingresoNeto = ingreso - impuestoRango;

    // Mostramos los resultados
    console.log("Ingreso bruto: $" + ingreso);
    console.log("Tasa aplicada: " + (tasa * 100) + "%");
    console.log("Impuesto a pagar: $" + impuestoRango);
    console.log("Ingreso neto (después de impuesto): $" + ingresoNeto);
}
