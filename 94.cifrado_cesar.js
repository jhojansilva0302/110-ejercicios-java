// 94. Cifrado César
// Desplaza cada letra del alfabeto un número fijo de posiciones

// Función de cifrado César
function cifrarCesar(texto, desplazamiento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charCodeAt(i);

    // Mayúsculas
    if (codigo >= 65 && codigo <= 90) {
      resultado += String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
    }
    // Minúsculas
    else if (codigo >= 97 && codigo <= 122) {
      resultado += String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
    }
    // Otros caracteres (espacios, signos, etc.)
    else {
      resultado += texto[i];
    }
  }

  return resultado;
}

// Mensaje y desplazamiento de ejemplo
let mensaje = "Hola Jhojan";
let desplazamiento = 3;

// Mostramos el texto original y cifrado
console.log("Texto original:", mensaje);
console.log("Texto cifrado (desplazamiento " + desplazamiento + "):", cifrarCesar(mensaje, desplazamiento));
