// 33. Conversor de Tiempo: Convierte entre segundos, minutos y horas.

// Pedimos al usuario el valor numérico a convertir
let valor = parseFloat(prompt("Ingrese el valor de tiempo a convertir (ej: 3600):")); // lee y convierte

// Pedimos la unidad de origen (s, min, h)
let unidadOrigen = prompt("Unidad de origen (s = segundos, min = minutos, h = horas):").toLowerCase(); // normaliza

// Pedimos la unidad destino (s, min, h)
let unidadDestino = prompt("Unidad destino (s = segundos, min = minutos, h = horas):").toLowerCase(); // normaliza

// Validamos que el valor sea número válido
if (isNaN(valor)) { // si no es número
  console.log("Valor inválido."); // mensaje de error
} else { // si valor válido
  // Convertimos todo primero a segundos como unidad base
  let segundosBase; // variable para almacenar el equivalente en segundos

  if (unidadOrigen === "s") { // si origen es segundos
    segundosBase = valor; // ya está en segundos
  } else if (unidadOrigen === "min") { // si origen es minutos
    segundosBase = valor * 60; // multiplicamos minutos por 60
  } else if (unidadOrigen === "h") { // si origen es horas
    segundosBase = valor * 3600; // multiplicamos horas por 3600
  } else { // si unidad origen no es válida
    console.log("Unidad de origen inválida."); // mostramos error
  }

  // Si la conversión a segundos se realizó, convertimos a la unidad destino
  if (segundosBase !== undefined) { // comprobamos que segundosBase tenga valor
    let resultado; // variable para el resultado final

    if (unidadDestino === "s") { // si destino es segundos
      resultado = segundosBase; // resultado en segundos
    } else if (unidadDestino === "min") { // si destino es minutos
      resultado = segundosBase / 60; // dividimos entre 60
    } else if (unidadDestino === "h") { // si destino es horas
      resultado = segundosBase / 3600; // dividimos entre 3600
    } else { // unidad destino inválida
      console.log("Unidad de destino inválida."); // mostramos error
    }

    // Si resultado fue calculado, lo mostramos
    if (resultado !== undefined) { // comprobamos
      console.log(`${valor} ${unidadOrigen} equivalen a ${resultado} ${unidadDestino}`); // mostramos conversión
    }
  }
}
