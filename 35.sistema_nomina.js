// 35. Sistema de Nómina
// Calcula pagos según el tipo de contrato

// Definimos el tipo de contrato (ejemplo)
let tipoContrato = "por_hora"; // Puede ser "indefinido", "temporal", "por_hora" o "aprendiz"
tipoContrato = tipoContrato.toLowerCase(); // Normalizamos a minúsculas

// Definimos el salario base o tarifa por hora según corresponda
let salarioBase = 15000; // Ejemplo: salario mensual o tarifa por hora

// Validamos que el salario/tarifa sea un número válido
if (isNaN(salarioBase) || salarioBase < 0) {
    console.log("Salario/tarifa inválida.");
} else {
    let pago = 0; // Inicializamos pago final

    switch (tipoContrato) {
        case "indefinido":
            // Se adiciona un bono de prestaciones del 10%
            pago = salarioBase + (salarioBase * 0.10);
            break;

        case "temporal":
            // Pago igual al salario base
            pago = salarioBase;
            break;

        case "por_hora":
            // Definimos las horas trabajadas
            let horasTrabajadas = 40; // Ejemplo: 40 horas
            if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
                console.log("Horas inválidas.");
                pago = undefined;
            } else {
                pago = salarioBase * horasTrabajadas; // tarifa por hora * horas
            }
            break;

        case "aprendiz":
            // Pago reducido al 75% del salario base
            pago = salarioBase * 0.75;
            break;

        default:
            console.log("Tipo de contrato no reconocido.");
    }

    // Mostramos el pago si se calculó correctamente
    if (pago !== undefined) {
        console.log("Tipo de contrato: " + tipoContrato);
        console.log("Pago a recibir: " + pago);
    }
}
