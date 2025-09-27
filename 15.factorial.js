// 15. Factorial
// Calcula el factorial de un número (n! = n * (n-1) * ... * 1)

// Pedimos un número
let numero = parseInt(prompt("Ingrese un número:"));

// Inicializamos el resultado en 1
let factorial = 1;

// Calculamos el factorial usando un bucle
for (let i = 1; i <= numero; i++) {
    factorial *= i; // Multiplicamos el acumulador por el valor actual
}

// Mostramos resultado
console.log("El factorial de " + numero + " es: " + factorial);
