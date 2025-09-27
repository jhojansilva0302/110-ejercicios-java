// 3. Mayor de Tres Números
// Encuentra el mayor de tres números usando if-else.

// Pedimos tres números al usuario
let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));
let c = parseFloat(prompt("Ingrese el tercer número:"));

// Usamos condicionales para comparar los tres valores
if (a >= b && a >= c) {
    console.log("El mayor es: " + a);
} else if (b >= a && b >= c) {
    console.log("El mayor es: " + b);
} else {
    console.log("El mayor es: " + c);
}
