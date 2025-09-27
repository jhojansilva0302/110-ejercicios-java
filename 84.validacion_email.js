// 84. Validación de Email
// Función que valida el formato de un email

// Función para validar correo
function validarEmail(email) {
  // Expresión regular básica para formato de email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email); // devuelve true si el email es válido
}

// Ejemplos de uso
console.log("Correo válido?", validarEmail("usuario@dominio.com"));
console.log("Correo válido?", validarEmail("correo@dominio"));
console.log("Correo válido?", validarEmail("texto_sin_email"));
