// 2. Par o Impar
// Determina si un número es par o impar usando el operador módulo.

// Pedimos un número al usuario
let numero = parseInt(prompt("Ingrese un número:"));

// Usamos el operador % para obtener el residuo
if (numero % 2 === 0) {
    // Si el residuo es 0, el número es par
    console.log("El número " + numero + " es PAR.");
} else {
    // Si el residuo no es 0, el número es impar
    console.log("El número " + numero + " es IMPAR.");
}
