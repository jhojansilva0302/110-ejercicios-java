// 23. Estación del Año
// Este programa determina la estación según el mes ingresado (Hemisferio Norte)

// Definimos el número del mes
let mes = 3; // Por ejemplo, 1=Enero, 2=Febrero, ..., 12=Diciembre

// Usamos switch para determinar la estación del año
switch (mes) {
    case 12: 
    case 1: 
    case 2:
        console.log("Invierno");
        break;
    case 3: 
    case 4: 
    case 5:
        console.log("Primavera");
        break;
    case 6: 
    case 7: 
    case 8:
        console.log("Verano");
        break;
    case 9: 
    case 10: 
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Número de mes inválido."); // Si el mes no está entre 1 y 12
}
