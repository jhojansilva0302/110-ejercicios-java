// 18. Calculadora de Velocidad
// Fórmulas: v = d / t, d = v * t, t = d / v

// Pedimos qué queremos calcular
let opcion = prompt("¿Qué desea calcular? (velocidad/distancia/tiempo)").toLowerCase();

// Según la opción ingresada, pedimos los datos necesarios
if (opcion === "velocidad") {
    let distancia = parseFloat(prompt("Ingrese la distancia (m):"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo (s):"));
    let velocidad = distancia / tiempo;
    console.log("La velocidad es: " + velocidad + " m/s");
} else if (opcion === "distancia") {
    let velocidad = parseFloat(prompt("Ingrese la velocidad (m/s):"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo (s):"));
    let distancia = velocidad * tiempo;
    console.log("La distancia es: " + distancia + " m");
} else if (opcion === "tiempo") {
    let distancia = parseFloat(prompt("Ingrese la distancia (m):"));
    let velocidad = parseFloat(prompt("Ingrese la velocidad (m/s):"));
    let tiempo = distancia / velocidad;
    console.log("El tiempo es: " + tiempo + " s");
} else {
    console.log("Opción no válida.");
}
