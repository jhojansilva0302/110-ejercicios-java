// 84. Validación de Email
// Función que valida el formato de un email

// Función para validar correo
function validarEmail(email) {
  // Expresión regular básica para formato de email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // devuelve true si el email es válido
}

// Ejemplos de correos
let emails = [
  "usuario@dominio.com",
  "correo@dominio",
  "texto_sin_email",
  "prueba123@mail.co",
  "malformado@.com"
];

// Mostramos validación para cada correo
emails.forEach(email => {
  if (validarEmail(email)) {
    console.log(`"${email}" ✅ es un correo válido`);
  } else {
    console.log(`"${email}" ❌ no es un correo válido`);
  }
});
