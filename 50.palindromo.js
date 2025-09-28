// 50. Palíndromo
// Verifica si una palabra o número es palíndromo

// Definimos la palabra o número a analizar
let palabra = "Anilina".toLowerCase(); // ejemplo: "Anilina"

// Normalizamos: eliminamos tildes y espacios
palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

// Invertimos la cadena
let invertida = palabra.split("").reverse().join("");

// Comparamos la palabra original con la invertida
if (palabra === invertida) {
  console.log("Es un palíndromo ✅");
} else {
  console.log("No es un palíndromo ❌");
}
