// 6. Calculadora de IMC
// Fórmula: IMC = peso / (altura^2)

// Pedimos el peso en kilogramos
let peso = parseFloat(10);

// Pedimos la altura en metros
let altura = parseFloat(10);

// Calculamos el IMC
let imc = peso / (altura * altura);

// Mostramos el resultado
console.log("Su IMC es: " + imc);

// Clasificamos el resultado según el valor
if (imc < 18.5) {
    console.log("Clasificación: Bajo peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Clasificación: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Clasificación: Sobrepeso");
} else {
    console.log("Clasificación: Obesidad");
}
