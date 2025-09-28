// Definimos la temperatura que queremos convertir
let temperatura = 10;       // Puedes usar parseFloat("10") si la temperatura viene de un usuario

// Definimos el tipo de conversión que queremos hacer
let tipo = "C";             // Debe ser "C" para convertir a Fahrenheit o "F" para convertir a Celsius

// Verificamos si el tipo ingresado es "C" (Celsius) para convertir a Fahrenheit
if (tipo.toUpperCase() === "C") {
    // Fórmula para convertir Celsius a Fahrenheit
    let fahrenheit = (temperatura * 9/5) + 32;
    // Mostramos el resultado en consola
    console.log(temperatura + "°C equivalen a " + fahrenheit + "°F");
} 
// Verificamos si el tipo ingresado es "F" (Fahrenheit) para convertir a Celsius
else if (tipo.toUpperCase() === "F") {
    // Fórmula para convertir Fahrenheit a Celsius
    let celsius = (temperatura - 32) * 5/9;
    // Mostramos el resultado en consola
    console.log(temperatura + "°F equivalen a " + celsius + "°C");
} 
// Si el usuario ingresó cualquier otra cosa que no sea "C" o "F"
else {
    // Mostramos un mensaje de error
    console.log("Unidad no válida, escriba C o F.");
}
