// 26. Sistema de Calificaciones
// Este programa convierte notas numéricas en calificaciones con letras (A, B, C, D, F)

// Definimos la nota a evaluar
let nota = 85; // Puedes cambiarla por cualquier número entre 0 y 100

// Usamos switch con true para evaluar rangos de notas
switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("Calificación: A"); // Nota entre 90 y 100
        break;
    case (nota >= 80 && nota < 90):
        console.log("Calificación: B"); // Nota entre 80 y 89
        break;
    case (nota >= 70 && nota < 80):
        console.log("Calificación: C"); // Nota entre 70 y 79
        break;
    case (nota >= 60 && nota < 70):
        console.log("Calificación: D"); // Nota entre 60 y 69
        break;
    case (nota >= 0 && nota < 60):
        console.log("Calificación: F"); // Nota menor a 60
        break;
    default:
        console.log("Nota inválida."); // Si la nota está fuera de rango
}
