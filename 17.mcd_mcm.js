// 17. MCD y MCM
// Calcula el Máximo Común Divisor (MCD) y el Mínimo Común Múltiplo (MCM)

// Función para calcular el MCD usando el algoritmo de Euclides
function calcularMCD(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

// Función para calcular el MCM usando la fórmula: (a * b) / MCD(a, b)
function calcularMCM(x, y) {
    return (x * y) / calcularMCD(x, y);
}

// Pedimos dos números al usuario
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

// Calculamos MCD y MCM
let mcd = calcularMCD(num1, num2);
let mcm = calcularMCM(num1, num2);

// Mostramos resultados
console.log("MCD de " + num1 + " y " + num2 + " es: " + mcd);
console.log("MCM de " + num1 + " y " + num2 + " es: " + mcm);
