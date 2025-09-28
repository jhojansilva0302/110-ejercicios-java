// 18. Calculadora de Velocidad
// Fórmulas: v = d / t, d = v * t, t = d / v

// Definimos qué queremos calcular
let opcion = "velocidad"; // Puede ser "velocidad", "distancia" o "tiempo"

// Convertimos a minúsculas para evitar errores con mayúsculas
opcion = opcion.toLowerCase();

// Según la opción ingresada, pedimos los datos necesarios
if (opcion === "velocidad") {
    let distancia = 100;  // Valor de ejemplo en metros
    let tiempo = 10;      // Valor de ejemplo en segundos
    let velocidad = distancia / tiempo; // Fórmula v = d / t
    console.log("La velocidad es: " + velocidad + " m/s");
} 
else if (opcion === "distancia") {
    let velocidad = 10;   // Valor de ejemplo en m/s
    let tiempo = 10;      // Valor de ejemplo en segundos
    let distancia = velocidad * tiempo; // Fórmula d = v * t
    console.log("La distancia es: " + distancia + " m");
} 
else if (opcion === "tiempo") {
    let distancia = 100;  // Valor de ejemplo en metros
    let velocidad = 10;   // Valor de ejemplo en m/s
    let tiempo = distancia / velocidad; // Fórmula t = d / v
    console.log("El tiempo es: " + tiempo + " s");
} 
else {
    console.log("Opción no válida.");
}
