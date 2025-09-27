// 48. Contador de Vocales
// Cuenta las vocales en una cadena de texto.

// Pedimos una frase
let texto = prompt("Ingrese un texto:").toLowerCase();

// Definimos las vocales
let vocales = "aeiou";
let contador = 0;

// Recorremos el texto
for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contador++;
  }
}

console.log(`El texto tiene ${contador} vocal(es).`);
