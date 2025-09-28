// 27. Menú de Restaurante
// Este programa simula un menú de opciones de comida

// Mostramos el menú en consola
console.log("Menú:");
console.log("1. Hamburguesa");
console.log("2. Pizza");
console.log("3. Ensalada");
console.log("4. Perro Caliente");

// Definimos la opción seleccionada (ejemplo)
let opcion = 2; // Cambiar por 1,2,3 o 4 según la elección del usuario

// Usamos switch para determinar qué opción se eligió
switch (opcion) {
    case 1:
        console.log("Usted eligió Hamburguesa.");
        break;
    case 2:
        console.log("Usted eligió Pizza.");
        break;
    case 3:
        console.log("Usted eligió Ensalada.");
        break;
    case 4:
        console.log("Usted eligió Perro Caliente.");
        break;
    default:
        console.log("Opción inválida."); // Si la opción no está entre 1 y 4
}
