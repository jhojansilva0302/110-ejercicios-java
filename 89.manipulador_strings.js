// 89. Manipulador de Strings
// Función con diversas operaciones sobre strings

// Función que aplica varias operaciones
function manipularString(texto) {
  return {
    original: texto,                              // texto original
    mayusculas: texto.toUpperCase(),              // todo en mayúsculas
    minusculas: texto.toLowerCase(),              // todo en minúsculas
    longitud: texto.length,                       // cantidad de caracteres
    primeraLetra: texto.charAt(0),                // primer carácter
    ultimaLetra: texto.charAt(texto.length - 1), // último carácter
    invertido: texto.split("").reverse().join(""),// texto invertido
    palabras: texto.split(" ")                    // dividido en palabras
  };
}

// Texto de ejemplo
let frase = "Programar en JavaScript es divertido";

// Mostramos resultados
let resultados = manipularString(frase);

console.log("Texto original:", resultados.original);
console.log("Mayúsculas:", resultados.mayusculas);
console.log("Minúsculas:", resultados.minusculas);
console.log("Longitud:", resultados.longitud);
console.log("Primera letra:", resultados.primeraLetra);
console.log("Última letra:", resultados.ultimaLetra);
console.log("Texto invertido:", resultados.invertido);
console.log("Palabras:", resultados.palabras);
