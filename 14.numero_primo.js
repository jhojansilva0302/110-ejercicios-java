// 14. Número Primo
// Verifica si un número es primo (solo divisible entre 1 y sí mismo)

// Pedimos un número
let numero = parseInt(prompt("Ingrese un número:"));

// Variable para indicar si es primo
let esPrimo = true;

// Los números menores o iguales a 1 no son primos
if (numero <= 1) {
    esPrimo = false;
} else {
    // Probamos divisores desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

// Mostramos resultado
if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}
