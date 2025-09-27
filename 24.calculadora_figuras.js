// 24. Calculadora de Figuras
// Calcula área y perímetro de diferentes figuras geométricas

// Pedimos la figura
let figura = prompt("Ingrese la figura (cuadrado, rectangulo, circulo):").toLowerCase();

switch (figura) {
    case "cuadrado":
        let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
        console.log("Área: " + (lado * lado));
        console.log("Perímetro: " + (4 * lado));
        break;

    case "rectangulo":
        let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
        let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
        console.log("Área: " + (base * altura));
        console.log("Perímetro: " + (2 * (base + altura)));
        break;

    case "circulo":
        let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        console.log("Área: " + (Math.PI * radio * radio));
        console.log("Perímetro: " + (2 * Math.PI * radio));
        break;

    default:
        console.log("Figura no válida.");
}
