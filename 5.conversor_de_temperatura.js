// 5. Conversor de Temperatura
// Convierte de Celsius a Fahrenheit y viceversa.

// Pedimos la temperatura al usuario
let temperatura = parseFloat(prompt("Ingrese la temperatura:"));

// Pedimos el tipo de conversión
let tipo = prompt("Escriba 'C' si la temperatura está en Celsius o 'F' si está en Fahrenheit:");

// Si el usuario escribió "C", convertimos a Fahrenheit
if (tipo.toUpperCase() === "C") {
    let fahrenheit = (temperatura * 9/5) + 32;
    console.log(temperatura + "°C equivalen a " + fahrenheit + "°F");
} 
// Si el usuario escribió "F", convertimos a Celsius
else if (tipo.toUpperCase() === "F") {
    let celsius = (temperatura - 32) * 5/9;
    console.log(temperatura + "°F equivalen a " + celsius + "°C");
} 
// Si escribe otra cosa, mostramos error
else {
    console.log("Unidad no válida, escriba C o F.");
}
