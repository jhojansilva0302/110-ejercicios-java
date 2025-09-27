// 16. Secuencia Fibonacci
// Genera los primeros n números de Fibonacci

// Pedimos la cantidad de números a generar
let n = parseInt(prompt("¿Cuántos números de Fibonacci quiere generar?"));

// Inicializamos los dos primeros números de la secuencia
let a = 0, b = 1;

// Mostramos los primeros valores
console.log("Secuencia Fibonacci:");

// Recorremos n veces
for (let i = 0; i < n; i++) {
    console.log(a); // Mostramos el valor actual
    let siguiente = a + b; // Calculamos el siguiente número
    a = b; // Avanzamos el valor de a
    b = siguiente; // Avanzamos el valor de b
}
