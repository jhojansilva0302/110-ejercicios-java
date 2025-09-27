// 89. Manipulador de Strings
// Función con diversas operaciones sobre strings

// Función que aplica varias operaciones
function manipularString(texto) {
  return {
    original: texto,                           // texto original
    mayusculas: texto.toUpperCase(),           // todo en mayúsculas
    minusculas: texto.toLowerCase(),           // todo en minúsculas
    longitud: texto.length,                    // cantidad de caracteres
    primeraLetra: texto.charAt(0),             // primer carácter
    ultimaLetra: texto.charAt(texto.length - 1), // último carácter
    invertido: texto.split("").reverse().join(""), // texto invertido
    palabras: texto.split(" ")                 // dividido en palabras
  };
}

// Ejemplo de uso
let frase = "Programar en JavaScript es divertido";
console.log("Resultados:", manipularString(frase));
