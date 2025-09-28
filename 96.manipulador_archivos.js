// 96. Manipulador de Archivos
// Simula operaciones básicas con archivos usando objetos en memoria
// (sin acceder al sistema real de archivos, solo simulación)

let sistemaArchivos = {}; // simulamos archivos como propiedades de un objeto

// Función para crear archivo
function crearArchivo(nombre, contenido) {
  sistemaArchivos[nombre] = contenido;
  console.log(`Archivo '${nombre}' creado.`);
}

// Función para leer archivo
function leerArchivo(nombre) {
  if (sistemaArchivos[nombre]) {
    return sistemaArchivos[nombre];
  } else {
    return "Archivo no encontrado.";
  }
}

// Función para eliminar archivo
function eliminarArchivo(nombre) {
  if (sistemaArchivos[nombre]) {
    delete sistemaArchivos[nombre];
    console.log(`Archivo '${nombre}' eliminado.`);
  } else {
    console.log("Archivo no encontrado.");
  }
}

// Ejemplo de uso
crearArchivo("nota.txt", "Hola Jhojan, este es un archivo simulado.");
console.log("Leer archivo:", leerArchivo("nota.txt"));
eliminarArchivo("nota.txt");

// Intentamos leer de nuevo para verificar eliminación
console.log("Leer archivo después de eliminar:", leerArchivo("nota.txt"));

// Mostramos el estado actual del sistema de archivos
console.log("Sistema de archivos actual:", sistemaArchivos);
