// 34. Calculadora Científica Básica: Implementa raíz cuadrada, potencia, logaritmo, seno y coseno.

// Pedimos al usuario la operación que desea realizar
let oper = prompt("Ingrese la operación (raiz, potencia, log, sin, cos):").toLowerCase(); // normaliza

// Según la operación, pedimos los operandos necesarios y calculamos
switch (oper) { // seleccionamos la operación
  case "raiz": // raíz cuadrada
    let x = parseFloat(prompt("Ingrese el número para calcular la raíz cuadrada:")); // lee número
    if (isNaN(x)) { // validación
      console.log("Número inválido."); // error
    } else { // si es válido
      console.log("Raíz cuadrada de " + x + " = " + Math.sqrt(x)); // mostramos raíz con Math.sqrt
    }
    break; // fin caso raiz

  case "potencia": // potencia (base^exp)
    let base = parseFloat(prompt("Ingrese la base:")); // lee base
    let exp = parseFloat(prompt("Ingrese el exponente:")); // lee exponente
    if (isNaN(base) || isNaN(exp)) { // validación
      console.log("Base o exponente inválido."); // error
    } else { // válido
      console.log(base + " ^ " + exp + " = " + Math.pow(base, exp)); // usamos Math.pow
    }
    break; // fin caso potencia

  case "log": // logaritmo natural
    let y = parseFloat(prompt("Ingrese el número para calcular ln(x):")); // lee número
    if (isNaN(y) || y <= 0) { // ln solo para >0
      console.log("Número inválido para logaritmo (debe ser > 0)."); // error
    } else { // válido
      console.log("ln(" + y + ") = " + Math.log(y)); // usamos Math.log (natural)
    }
    break; // fin caso log

  case "sin": // seno (valor en radianes)
    let angS = parseFloat(prompt("Ingrese el ángulo en grados para calcular sin:")); // lee ángulo en grados
    if (isNaN(angS)) { // validación
      console.log("Ángulo inválido."); // error
    } else { // válido
      let radS = angS * (Math.PI / 180); // convertimos a radianes
      console.log("sin(" + angS + "°) = " + Math.sin(radS)); // mostramos Math.sin
    }
    break; // fin caso sin

  case "cos": // coseno (valor en radianes)
    let angC = parseFloat(prompt("Ingrese el ángulo en grados para calcular cos:")); // lee ángulo en grados
    if (isNaN(angC)) { // validación
      console.log("Ángulo inválido."); // error
    } else { // válido
      let radC = angC * (Math.PI / 180); // convertimos a radianes
      console.log("cos(" + angC + "°) = " + Math.cos(radC)); // mostramos Math.cos
    }
    break; // fin caso cos

  default: // si la operación no está soportada
    console.log("Operación no válida. Elija: raiz, potencia, log, sin o cos."); // instrucción al usuario
}
