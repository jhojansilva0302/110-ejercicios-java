// 49. Inversor de Número
// Invierte un número (ejemplo: 123 → 321).

// Pedimos el número
let numero = prompt("Ingrese un número:");

// Validamos que sea numérico
if (isNaN(numero)) {
  console.log("Debe ingresar un número válido.");
} else {
  // Convertimos en string, lo invertimos y volvemos a número
  let invertido = numero.split("").reverse().join("");
  console.log(`Número original: ${numero}`);
  console.log(`Número invertido: ${invertido}`);
}
