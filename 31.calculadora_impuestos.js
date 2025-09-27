// 31. Calculadora de Impuestos
// Calcula el valor a pagar con impuesto según la categoría del producto

// Pedimos el valor del producto
let valor = parseFloat(prompt("Ingrese el valor del producto:"));

// Pedimos la categoría
let categoria = prompt("Ingrese la categoría del producto (A, B, C):").toUpperCase();

// Variable para guardar el impuesto
let impuesto = 0;

// Switch para asignar el porcentaje de impuesto
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

// Si la categoría fue válida, calculamos el total
if (impuesto > 0) {
    let total = valor + (valor * impuesto);
    console.log("Valor del producto: $" + valor);
    console.log("Impuesto (" + (impuesto * 100) + "%): $" + (valor * impuesto));
    console.log("Total a pagar: $" + total);
}
// 31. Calculadora de Impuestos: Calcula impuestos según diferentes rangos de ingresos.

// Pedimos al usuario que ingrese su ingreso (mensual o anual según prefieras)
let ingreso = parseFloat(prompt("Ingrese su ingreso (por ejemplo 2500000):")); // lee y convierte a número

// Verificamos que el ingreso sea un número válido
if (isNaN(ingreso)) { // si ingreso no es número
  console.log("Ingreso inválido."); // informamos error
} else { // si ingreso es válido
  let tasa = 0; // inicializamos la tasa de impuesto (en decimal)
  let impuesto = 0; // inicializamos el valor del impuesto a pagar

  // Asignamos la tasa según rangos de ingreso
  if (ingreso <= 1000000) { // primer rango
    tasa = 0.05; // 5% de impuesto
  } else if (ingreso <= 3000000) { // segundo rango
    tasa = 0.10; // 10% de impuesto
  } else if (ingreso <= 5000000) { // tercer rango
    tasa = 0.15; // 15% de impuesto
  } else { // para ingresos mayores al rango anterior
    tasa = 0.20; // 20% de impuesto
  }

  impuesto = ingreso * tasa; // calculamos el monto del impuesto multiplicando ingreso por tasa
  let ingresoNeto = ingreso - impuesto; // calculamos el ingreso después de deducir el impuesto

  console.log("Ingreso bruto: " + ingreso); // mostramos ingreso bruto
  console.log("Tasa aplicada: " + (tasa * 100) + "%"); // mostramos la tasa en porcentaje
  console.log("Impuesto a pagar: " + impuesto); // mostramos el monto de impuesto
  console.log("Ingreso neto (después de impuesto): " + ingresoNeto); // mostramos ingreso neto
}
