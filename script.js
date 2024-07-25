//Funcion para mostrar el menu inicial
function mostrarMenu() {
    return prompt(
        "Seleccione una opción:\n (1) Hacer una reserva\n (2) Ver todas las reservas\n (3) Filtrar reservas\n (4) Confirmar una reserva\n (5) Salir"
    );
}

//Defino el objeto reserva
let reserva = {
    nombre: "",
    personas: 0,
    fecha: "",
    hora: "",
    confirmada: false,
}

//Defino el array que contendra las reservas
let reservas = []

//Funcion que tomara una nueva reserva y la agregara al array
function hacerReserva() {
    reserva.nombre = prompt("Ingrese un nombre para la reserva")
    reserva.personas = prompt("Ingrese cantidad de personas")
    reserva.fecha = prompt("Ingrese la fecha de reserva (DD/MM/AAAA)")
    reserva.hora = prompt("Ingrese hora de la reserva (HH:MM)")
    
    let nuevaReserva = {
        nombre: reserva.nombre,
        personas: reserva.personas,
        fecha: reserva.fecha,
        hora: reserva.hora,
        confirmada: false,
    }

    reservas.push(nuevaReserva);
    alert("Reserva registrada con exito!")
}

// Función para ver todas las reservas
function verReservas() {
    if (reservas.length === 0) {
        alert("No hay reservas.");
    } else {
        let todasLasReservas = "Reservas:\n";
        reservas.forEach((reserva, index) => {
            todasLasReservas += `${index + 1}. ${reserva.nombre} - ${reserva.personas} personas - ${reserva.fecha} a las ${reserva.hora} - Confirmada: ${reserva.confirmada}\n`;
        });
        alert(todasLasReservas);
    }
}

// Función para filtrar reservas
function filtrarReservas() {
    let criterio = prompt(
        "Seleccione el criterio de filtrado:\n (1) Reservas confirmadas\n (2) Reservas no confirmadas\n (3) Reservas por fecha"
    );

    let reservasFiltradas

    switch (criterio) {
        case '1':
            reservasFiltradas = reservas.filter(reserva => reserva.confirmada);
            break;
        case '2':
            reservasFiltradas = reservas.filter(reserva => !reserva.confirmada);
            break;
        case '3':
            let fecha = prompt("Ingrese la fecha para filtrar las reservas (DD-MM-AAAA):");
            reservasFiltradas = reservas.filter(reserva => reserva.fecha === fecha);
            break;
        default:
            alert("Criterio no válido, por favor intente de nuevo.");
            return;
    }
    if (reservasFiltradas.length === 0) {
        alert("No hay reservas que coincidan con el criterio.");
    } else {
        let reservasTexto = "Reservas filtradas:\n";
        reservasFiltradas.forEach((reserva, index) => {
            reservasTexto += `${index + 1}. ${reserva.nombre} - ${reserva.personas} personas - ${reserva.fecha} a las ${reserva.hora} - Confirmada: ${reserva.confirmada}\n`;
        });
        alert(reservasTexto);
    }
}

// Función para confirmar una reserva
function confirmarReserva() {
    let nombre = prompt("Ingrese el nombre para confirmar la reserva:");
    let reserva = reservas.find(reserva => reserva.nombre.toLowerCase() === nombre.toLowerCase());
    if (reserva) {
        reserva.confirmada = true;
        alert("Reserva confirmada!")
    } else {
        alert("Reserva no encontrada.");
    }
}


// Bucle principal del menú
let salir = false;

while (!salir) {
    let opcion = mostrarMenu();

    switch (opcion) {
        case '1':
            hacerReserva();
            break;
        case '2':
            verReservas();
            break;
        case '3':
            filtrarReservas();
            break;
        case '4':
            confirmarReserva();
            break;
        case '5':
            salir = true;
            alert("Gracias por utilizar nuestro sistema de reservas.");
            break;
        default:
            alert("Opción no válida, por favor intente de nuevo.");
    }
}