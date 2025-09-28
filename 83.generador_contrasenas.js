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

// Ejemplos de contraseñas
console.log("Contraseña de 8 caracteres:", generarContrasena(8));
console.log("Contraseña de 12 caracteres:", generarContrasena(12));
console.log("Contraseña de 16 caracteres:", generarContrasena(16));
