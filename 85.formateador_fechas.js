// 85. Formateador de Fechas
// Convierte fechas entre diferentes formatos

// Función para formatear fecha en diferentes estilos
function formatearFecha(fecha) {
  let opcionesCorto = { day: "2-digit", month: "2-digit", year: "numeric" };
  let opcionesLargo = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return {
    corto: fecha.toLocaleDateString("es-ES", opcionesCorto), // dd/mm/yyyy
    largo: fecha.toLocaleDateString("es-ES", opcionesLargo), // lunes, 27 de septiembre de 2025
    ISO: fecha.toISOString().split("T")[0] // yyyy-mm-dd
  };
}

// Ejemplos de fechas
let fechas = [
  new Date(),
  new Date("2025-01-01"),
  new Date("2025-12-25")
];

// Mostramos cada fecha en los diferentes formatos
fechas.forEach(fecha => {
  let formatos = formatearFecha(fecha);
  console.log(`Fecha original: ${fecha}`);
  console.log(`Formato corto: ${formatos.corto}`);
  console.log(`Formato largo: ${formatos.largo}`);
  console.log(`Formato ISO: ${formatos.ISO}`);
  console.log("---------------------------");
});
