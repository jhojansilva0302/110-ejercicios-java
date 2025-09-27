// 99. Simulador de Dados
// Simula el lanzamiento de uno o dos dados

// Función que lanza un dado (1 a 6)
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función que simula dos dados
function lanzarDosDados() {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  return { dado1, dado2, suma: dado1 + dado2 };
}

// Ejemplo de uso
console.log("Lanzar un dado:", lanzarDado());
console.log("Lanzar dos dados:", lanzarDosDados());
