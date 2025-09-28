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
console.log("Entrada: 'Hola' →", validarDato("Hola"));
console.log("Entrada: 123 →", validarDato(123));
console.log("Entrada: true →", validarDato(true));
console.log("Entrada: [1, 2, 3] →", validarDato([1, 2, 3]));
console.log("Entrada: { nombre: 'Jhojan' } →", validarDato({ nombre: "Jhojan" }));
