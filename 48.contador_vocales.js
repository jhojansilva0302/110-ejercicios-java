// 48. Contador de Vocales
// Cuenta las vocales en una cadena de texto

// Definimos la frase a analizar
let texto = "Hola Mundo".toLowerCase(); // ejemplo de texto

// Definimos las vocales
let vocales = "aeiou";
let contador = 0;

// Recorremos cada carácter del texto
for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) { // si el carácter es vocal
    contador++;
  }
}

// Mostramos el resultado
console.log(`El texto tiene ${contador} vocal(es).`);
