// 83. Generador de Contraseñas
// Función que genera contraseñas aleatorias seguras

// Función para generar contraseña
function generarContrasena(longitud) {
  // Definimos los caracteres disponibles
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let contrasena = "";

  // Recorremos tantas veces como indique la longitud
  for (let i = 0; i < longitud; i++) {
    // Generamos un índice aleatorio
    let indice = Math.floor(Math.random() * caracteres.length);
    // Añadimos el carácter correspondiente
    contrasena += caracteres[indice];
  }

  return contrasena;
}

// Ejemplo de contraseña de 12 caracteres
console.log("Contraseña generada:", generarContrasena(12));
