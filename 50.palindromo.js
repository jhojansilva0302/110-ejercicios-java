// 50. Palíndromo
// Verifica si una palabra o número es palíndromo.

// Pedimos el valor
let palabra = prompt("Ingrese una palabra o número:").toLowerCase();

// Eliminamos espacios y tildes
palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

// Invertimos la cadena
let invertida = palabra.split("").reverse().join("");

// Comparamos
if (palabra === invertida) {
  console.log("Es un palíndromo ✅");
} else {
  console.log("No es un palíndromo ❌");
}
