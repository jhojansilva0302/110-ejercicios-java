// 26. Sistema de Calificaciones
// Convierte notas numéricas a letras (A, B, C, etc.)

// Pedimos la nota al usuario
let nota = parseFloat(prompt("Ingrese la nota (0-100):"));

// Usamos switch con condiciones true para evaluar rangos
switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("Calificación: A");
        break;
    case (nota >= 80 && nota < 90):
        console.log("Calificación: B");
        break;
    case (nota >= 70 && nota < 80):
        console.log("Calificación: C");
        break;
    case (nota >= 60 && nota < 70):
        console.log("Calificación: D");
        break;
    case (nota >= 0 && nota < 60):
        console.log("Calificación: F");
        break;
    default:
        console.log("Nota inválida.");
}
