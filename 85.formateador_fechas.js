// 85. Formateador de Fechas
// Convierte fechas entre diferentes formatos

// Función para formatear fecha en diferentes estilos
function formatearFecha(fecha) {
  let opciones1 = { day: "2-digit", month: "2-digit", year: "numeric" };
  let opciones2 = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return {
    formatoCorto: fecha.toLocaleDateString("es-ES", opciones1), // dd/mm/yyyy
    formatoLargo: fecha.toLocaleDateString("es-ES", opciones2), // lunes, 27 de septiembre de 2025
    formatoISO: fecha.toISOString().split("T")[0] // yyyy-mm-dd
  };
}

// Probamos con la fecha actual
let hoy = new Date();
console.log("Fecha actual formateada:", formatearFecha(hoy));
