// 86. Contador de Palabras
// Cuenta cuántas palabras hay en un texto

// Función que cuenta palabras en un texto
function contarPalabras(texto) {
  texto = texto.trim(); // eliminamos espacios al inicio y final
  if (texto === "") return 0; // si está vacío, retorna 0
  let palabras = texto.split(/\s+/); // separamos por uno o más espacios
  return palabras.length;
}

// Ejemplos de textos
let textos = [
  "Hola, estoy practicando JavaScript paso a paso",
  "   Esto   tiene   muchos   espacios   ",
  "",
  "Una sola palabra"
];

// Mostramos cada texto y su conteo de palabras
textos.forEach(texto => {
  console.log("Texto:", `"${texto}"`);
  console.log("Cantidad de palabras:", contarPalabras(texto));
  console.log("---------------------------");
});
