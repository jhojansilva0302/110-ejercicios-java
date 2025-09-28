// 24. Calculadora de Figuras
// Este programa calcula el área y el perímetro de diferentes figuras geométricas

// Definimos la figura a calcular
let figura = "cuadrado"; // Puede ser "cuadrado", "rectangulo" o "circulo"

// Convertimos a minúsculas para evitar errores con mayúsculas
figura = figura.toLowerCase();

// Usamos switch para determinar qué figura calcular
switch (figura) {
    case "cuadrado":
        let lado = 5; // Ejemplo de medida del lado
        console.log("Área: " + (lado * lado));         // Área = lado^2
        console.log("Perímetro: " + (4 * lado));       // Perímetro = 4 * lado
        break;

    case "rectangulo":
        let base = 8;    // Ejemplo de base
        let altura = 4;  // Ejemplo de altura
        console.log("Área: " + (base * altura));                   // Área = base * altura
        console.log("Perímetro: " + (2 * (base + altura)));       // Perímetro = 2*(base+altura)
        break;

    case "circulo":
        let radio = 3;  // Ejemplo de radio
        console.log("Área: " + (Math.PI * radio * radio));       // Área = π*r^2
        console.log("Perímetro: " + (2 * Math.PI * radio));     // Perímetro = 2*π*r
        break;

    default:
        console.log("Figura no válida."); // Si la figura no es ninguna de las anteriores
}
