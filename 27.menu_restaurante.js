// 27. Menú de Restaurante
// Simula un menú con diferentes opciones de comida

// Mostramos el menú
console.log("Menú:");
console.log("1. Hamburguesa");
console.log("2. Pizza");
console.log("3. Ensalada");
console.log("4. Perro Caliente");

// Pedimos la opción
let opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));

// Usamos switch para mostrar la selección
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
        console.log("Opción inválida.");
}
