// 40. Simulador de Cajero Automático
// Simula consultar saldo, depositar y retirar dinero.

let saldo = 500000; // saldo inicial
let opcion;

do {
  // Mostramos menú
  console.log("\n--- Cajero Automático ---");
  console.log("1. Consultar saldo");
  console.log("2. Depositar dinero");
  console.log("3. Retirar dinero");
  console.log("4. Salir");

  opcion = parseInt(prompt("Seleccione una opción:"));

  switch (opcion) {
    case 1:
      console.log("Saldo actual: $" + saldo);
      break;

    case 2:
      let deposito = parseFloat(prompt("Ingrese cantidad a depositar:"));
      if (deposito > 0) {
        saldo += deposito;
        console.log("Depósito exitoso. Nuevo saldo: $" + saldo);
      } else {
        console.log("Cantidad inválida.");
      }
      break;

    case 3:
      let retiro = parseFloat(prompt("Ingrese cantidad a retirar:"));
      if (retiro > 0 && retiro <= saldo) {
        saldo -= retiro;
        console.log("Retiro exitoso. Nuevo saldo: $" + saldo);
      } else {
        console.log("Cantidad inválida o insuficiente.");
      }
      break;

    case 4:
      console.log("Gracias por usar el cajero. 👋");
      break;

    default:
      console.log("Opción no válida.");
  }
} while (opcion !== 4);
