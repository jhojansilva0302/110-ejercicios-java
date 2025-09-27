// 35. Sistema de Nómina: Calcula pagos según tipo de contrato.

// Pedimos el tipo de contrato al usuario
let tipoContrato = prompt("Ingrese el tipo de contrato (indefinido, temporal, por_hora, aprendiz):").toLowerCase(); // normaliza

// Pedimos el salario o tarifa según el tipo
let salarioBase = parseFloat(prompt("Ingrese el salario base (mensual) o la tarifa por hora según corresponda:")); // lee valor

// Validamos entrada numérica
if (isNaN(salarioBase) || salarioBase < 0) { // si no es número o negativo
  console.log("Salario/tarifa inválida."); // error
} else { // si es válida
  let pago = 0; // calculo final del pago
  // Calculamos el pago según el tipo de contrato
  switch (tipoContrato) { // evaluamos el tipo
    case "indefinido": // contrato indefinido mensual
      // Suponemos que salarioBase es salario mensual y se adiciona un bono de prestaciones (ej: 10%)
      pago = salarioBase + (salarioBase * 0.10); // agrega 10% de prestaciones
      break; // fin caso indefinido

    case "temporal": // contrato temporal mensual sin prestaciones
      // Suponemos salarioBase es mensual pero sin bono
      pago = salarioBase; // pago igual al salario base
      break; // fin caso temporal

    case "por_hora": // contrato por hora
      // Pedimos horas trabajadas y calculamos
      let horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:")); // lee horas
      if (isNaN(horasTrabajadas) || horasTrabajadas < 0) { // validación horas
        console.log("Horas inválidas."); // error
        pago = undefined; // marcamos como inválido
      } else { // horas válidas
        pago = salarioBase * horasTrabajadas; // tarifa por hora * horas
      }
      break; // fin caso por_hora

    case "aprendiz": // contrato de aprendiz (remuneración parcial)
      // Suponemos remuneración reducida (ej: 75% del salario base)
      pago = salarioBase * 0.75; // calculamos pago
      break; // fin caso aprendiz

    default: // tipo no válido
      console.log("Tipo de contrato no reconocido."); // mensaje de error
  }

  // Si pago fue calculado correctamente, lo mostramos
  if (pago !== undefined) { // verificamos que pago tenga valor válido
    console.log("Tipo de contrato: " + tipoContrato); // mostramos tipo
    console.log("Pago a recibir: " + pago); // mostramos pago final
  }
}
