// 40. Simulador de Cajero Automático
// Simula consultar saldo, depositar y retirar dinero

// Saldo inicial
let saldo = 500000;

// Definimos la opción que vamos a simular (1: consultar, 2: depositar, 3: retirar, 4: salir)
let opcion = 2; // Ejemplo: simulamos depositar dinero

// Mostramos menú
console.log("\n--- Cajero Automático ---");
console.log("1. Consultar saldo");
console.log("2. Depositar dinero");
console.log("3. Retirar dinero");
console.log("4. Salir");

// Switch según la opción
switch (opcion) {
  case 1: // Consultar saldo
    console.log("Saldo actual: $" + saldo);
    break;

  case 2: // Depositar dinero
    let deposito = 200000; // simulamos depósito de $200,000
    if (deposito > 0) {
      saldo += deposito;
      console.log("Depósito exitoso. Nuevo saldo: $" + saldo);
    } else {
      console.log("Cantidad inválida.");
    }
    break;

  case 3: // Retirar dinero
    let retiro = 100000; // simulamos retiro de $100,000
    if (retiro > 0 && retiro <= saldo) {
      saldo -= retiro;
      console.log("Retiro exitoso. Nuevo saldo: $" + saldo);
    } else {
      console.log("Cantidad inválida o insuficiente.");
    }
    break;

  case 4: // Salir
    console.log("Gracias por usar el cajero. 👋");
    break;

  default: // Opción no válida
    console.log("Opción no válida.");
}
