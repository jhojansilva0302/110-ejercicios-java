// 98. Generador de Reportes
// Función que genera reportes a partir de datos (ejemplo: ventas)

// Función que genera un reporte en texto
function generarReporte(ventas) {
  let total = ventas.reduce((a, b) => a + b, 0);
  let promedio = total / ventas.length;

  return `
  === REPORTE DE VENTAS ===
  Ventas registradas: ${ventas.join(", ")}
  Total de ventas: ${total}
  Promedio de ventas: ${promedio.toFixed(2)}
  =========================
  `;
}

// Ejemplo de uso
let ventas = [120, 340, 560, 230, 150];
console.log(generarReporte(ventas));
