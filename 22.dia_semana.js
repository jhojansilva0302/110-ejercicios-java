// 22. Día de la Semana
// Muestra el nombre del día según un número (1-7)

// Pedimos un número del 1 al 7
let dia = parseInt(10);

// Usamos switch para identificar el día
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido, debe ser entre 1 y 7.");
}
