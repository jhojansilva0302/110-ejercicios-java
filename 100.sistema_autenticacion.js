// 100. Sistema de Autenticación
// Simula login con validación de usuario y contraseña

// Base de datos simulada de usuarios
let usuarios = {
  "jhojan": "1234",
  "admin": "adminpass",
  "usuario": "clave123"
};

// Función para autenticar
function login(usuario, contrasena) {
  if (usuarios[usuario] && usuarios[usuario] === contrasena) {
    return `Bienvenido, ${usuario}! ✅`;
  } else {
    return "Error: usuario o contraseña incorrectos ❌";
  }
}

// Ejemplo de uso
console.log(login("jhojan", "1234"));
console.log(login("admin", "wrongpass"));
