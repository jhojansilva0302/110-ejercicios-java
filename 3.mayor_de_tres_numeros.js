// 3. Mayor de Tres Números
// Encuentra el mayor de tres números usando if-else.

// Pedimos tres números al usuario
let a = parseFloat(10);
let b = parseFloat(1);
let c = parseFloat(100);

// Usamos condicionales para comparar los tres valores
if (a >= b && a >= c) {
    console.log("El mayor es: " + a);
} else if (b >= a && b >= c) {
    console.log("El mayor es: " + b);
} else {
    console.log("El mayor es: " + c);
}
