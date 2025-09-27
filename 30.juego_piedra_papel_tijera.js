// 30. Juego de Piedra, Papel o Tijera
// Implementa el juego clásico contra la computadora

// Opciones posibles
let opciones = ["piedra", "papel", "tijera"];

// Pedimos al jugador su elección
let jugador = prompt("Elija: piedra, papel o tijera").toLowerCase();

// La computadora elige aleatoriamente
let computadora = opciones[Math.floor(Math.random() * 3)];

// Mostramos elecciones
console.log("Jugador: " + jugador);
console.log("Computadora: " + computadora);

// Determinamos el resultado
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
    console.log("Opción inválida.");
}
