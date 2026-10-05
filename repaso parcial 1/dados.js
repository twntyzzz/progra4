// ==========================================
// FUNCIÓN PRINCIPAL: lanzar
// ==========================================
// Esta función simula la animación de tirar dos dados y calcula el resultado final.
function lanzar() {
    // 1. Obtenemos el botón del HTML usando su id
    let boton = document.getElementById("boton");

    // Deshabilitamos el botón para evitar que el usuario vuelva a clickear mientras giran los dados
    boton.disabled = true;

    // Cambiamos el texto de la alerta para indicar que los dados están en movimiento
    document.getElementById("total").className = "alert alert-warning text-center fw-bold fs-5 mb-3";
    document.getElementById("total").innerText = "Lanzando...";

    // =========================================================================
    // ANIMACIÓN CON setInterval()
    // =========================================================================
    // setInterval(funcion, milisegundos): ejecuta la función repetidamente cada X milisegundos.
    // En este caso, cada 50 milisegundos (muy rápido) cambia los números de los dados
    // por números al azar entre 1 y 6 para dar el efecto visual de que están rodando.
    let animacion = setInterval(function () {
        // Math.random() * 6 da entre 0 y 5.999...
        // Math.floor() quita decimales (da de 0 a 5)
        // + 1 hace que el rango final sea de 1 a 6 (las caras de un dado)
        document.getElementById("dado1").innerText = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dado2").innerText = Math.floor(Math.random() * 6) + 1;
    }, 50);

    // =========================================================================
    // DETENER ANIMACIÓN CON setTimeout()
    // =========================================================================
    // setTimeout(funcion, milisegundos): espera el tiempo indicado (2000 ms = 2 segundos)
    // y ejecuta la función UNA SOLA VEZ.
    setTimeout(function () {
        // clearInterval(animacion): frena y destruye el intervalo que estaba cambiando los números
        clearInterval(animacion);

        // Generamos los dos números definitivos finales para cada dado
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;

        // Sumamos los dos dados para obtener el total
        let total = dado1 + dado2;

        // Mostramos los valores definitivos en los dados del HTML
        document.getElementById("dado1").innerText = dado1;
        document.getElementById("dado2").innerText = dado2;

        // Mostramos el total en verde con estilo 'alert-success'
        let mensajeTotal = document.getElementById("total");
        mensajeTotal.className = "alert alert-success text-center fw-bold fs-5 mb-3";
        mensajeTotal.innerText = `Total: ${total} (Dado 1: ${dado1} + Dado 2: ${dado2})`;

        // Agregamos este lanzamiento al historial usando .innerHTML +=
        let historial = document.getElementById("historial");
        historial.innerHTML += `<li class="list-group-item d-flex justify-content-between">
            <span>Dado 1: <strong>${dado1}</strong> | Dado 2: <strong>${dado2}</strong></span>
            <span class="badge bg-primary fs-6">Total: ${total}</span>
        </li>`;

        // Volvemos a habilitar el botón para que el usuario pueda volver a tirar
        boton.disabled = false;
    }, 2000); // 2000 milisegundos = 2 segundos de animación
}

// ==========================================
// FUNCIÓN: reiniciar
// ==========================================
// Limpia el historial y devuelve los dados a su estado original
function reiniciar() {
    document.getElementById("dado1").innerText = "1";
    document.getElementById("dado2").innerText = "1";

    let mensajeTotal = document.getElementById("total");
    mensajeTotal.className = "alert alert-info text-center fw-bold fs-5 mb-3";
    mensajeTotal.innerText = "Presiona el botón para lanzar";

    document.getElementById("historial").innerHTML = "";
    document.getElementById("boton").disabled = false;
}
