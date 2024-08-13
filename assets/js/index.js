// Constructor
function Clientes(nombre, identificador, clave, saldo) {
    this.nombre = nombre;
    this.identificador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}

// Crear clientes
let cliente1 = new Clientes('Carlos Vasquez', '001', '1234', 50000);
let cliente2 = new Clientes('Patricia Torres', '002', '4444', 10000);
let cliente3 = new Clientes('Mario Borgues', '003', '3333', 25000);

// Almacenar clientes en un array
let clientes = [cliente1, cliente2, cliente3];

// Función para mostrar el menú y manejar las opciones
function mostrarMenu(cliente) {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Ver saldo\n2. Realizar giro\n3. Realizar depósito\n4. Salir");

        switch(opcion) {
            case '1':
                alert(`Tu saldo actual es: $${cliente.saldo}`);
                break;
            case '2':
                let giro = parseFloat(prompt("¿Cuánto deseas girar?"));
                if (giro > cliente.saldo) {
                    alert("Error: Saldo insuficiente.");
                } else {
                    cliente.saldo -= giro;
                    alert(`Has girado $${giro}. Tu nuevo saldo es: $${cliente.saldo}`);
                }
                break;
            case '3':
                let deposito = parseFloat(prompt("¿Cuánto deseas depositar?"));
                cliente.saldo += deposito;
                alert(`Has depositado $${deposito}. Tu nuevo saldo es: $${cliente.saldo}`);
                break;
            case '4':
                alert("Gracias por usar nuestros servicios. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    } while (opcion !== '4');
}

// Función para verificar identificador y clave
function verificarCliente() {
    let identificador = prompt("Ingresa tu identificador:");
    let clave = prompt("Ingresa tu clave:");

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].identificador === identificador && clientes[i].clave === clave) {
            alert(" Bienvenido a Banca en línea ")
            alert(`Bienvenido ${clientes[i].nombre}`);
            mostrarMenu(clientes[i]);  // Llamar a la función del menú
            return;
        }
    }
    alert("Error: Identificador o clave incorrectos.");
}

// Ejemplo de uso
verificarCliente();