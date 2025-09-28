// 30. Juego de Piedra, Papel o Tijera
// Este programa implementa el juego clásico contra la computadora

// Opciones posibles
let opciones = ["piedra", "papel", "tijera"];

// Definimos la elección del jugador (ejemplo)
let jugador = "Piedra"; // Puede ser "piedra", "papel" o "tijera"

// Convertimos a minúsculas para evitar errores con mayúsculas
jugador = jugador.toLowerCase();

// La computadora elige aleatoriamente
let computadora = opciones[Math.floor(Math.random() * 3)];

// Mostramos las elecciones
console.log("Jugador: " + jugador);
console.log("Computadora: " + computadora);

// Determinamos el resultado del juego
if (jugador === computadora) {
    console.log("Empate!");
} else if (
    (jugador === "piedra" && computadora === "tijera") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijera" && computadora === "papel")
) {
    console.log("¡Ganaste!");
} else if (opciones.includes(jugador)) {
    console.log("Perdiste.");
} else {
    console.log("Opción inválida."); // Si el jugador ingresó algo que no es válido
}
