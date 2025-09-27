// 81. Función de Validación
// Crea una función que valide diferentes tipos de datos (string, number, boolean, object, array)

// Función que recibe un valor y valida su tipo
function validarDato(dato) {
  if (typeof dato === "string") {
    return "Es un texto (string)";
  } else if (typeof dato === "number") {
    return "Es un número";
  } else if (typeof dato === "boolean") {
    return "Es un valor booleano (true/false)";
  } else if (Array.isArray(dato)) {
    return "Es un array";
  } else if (typeof dato === "object" && dato !== null) {
    return "Es un objeto";
  } else {
    return "Tipo de dato no reconocido";
  }
}

// Probamos la función con diferentes valores
console.log(validarDato("Hola"));
console.log(validarDato(123));
console.log(validarDato(true));
console.log(validarDato([1, 2, 3]));
console.log(validarDato({ nombre: "Jhojan" }));
