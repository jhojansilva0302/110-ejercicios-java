// 49. Inversor de Número
// Invierte un número (ejemplo: 123 → 321)

// Definimos el número a invertir
let numero = 123; // ejemplo: 123

// Validamos que sea numérico
if (isNaN(numero)) {
  console.log("Debe ingresar un número válido.");
} else {
  // Convertimos el número a string, lo invertimos y luego mostramos
  let invertido = numero.toString().split("").reverse().join("");
  console.log(`Número original: ${numero}`);
  console.log(`Número invertido: ${invertido}`);
}
