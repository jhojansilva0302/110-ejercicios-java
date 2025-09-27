// 86. Contador de Palabras
// Cuenta cuántas palabras hay en un texto

// Función que cuenta palabras en un texto
function contarPalabras(texto) {
  // Eliminamos espacios al inicio y final
  texto = texto.trim();

  // Dividimos el texto por espacios (uno o más)
  let palabras = texto.split(/\s+/);

  // Retornamos la cantidad de palabras
  return palabras.length;
}

// Ejemplo de uso
let frase = "Hola Jhojan, estamos practicando JavaScript paso a paso";
console.log("Texto:", frase);
console.log("Cantidad de palabras:", contarPalabras(frase));
