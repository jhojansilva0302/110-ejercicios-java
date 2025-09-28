// 13. Suma de Dígitos
// Calcula la suma de los dígitos de un número

// Pedimos un número al usuario
let numero = 10;

// Inicializamos una variable para acumular la suma
let suma = 0;

// Recorremos cada carácter del número
for (let i = 0; i < numero.length; i++) {
    // Convertimos el carácter en número y lo sumamos
    suma += parseInt(numero[i]);
}

// Mostramos el resultado
console.log("La suma de los dígitos es: " + suma);
