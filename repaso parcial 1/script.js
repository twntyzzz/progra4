// ==========================================
// VARIABLES GLOBALES
// ==========================================
// numeroSecreto: guarda el número que el usuario tiene que adivinar (entre 1 y 100).
// intentos: contador de cuántos intentos le quedan al usuario (inicia en 3).
let numeroSecreto;
let intentos = 3;

// ==========================================
// FUNCIÓN: iniciarJuego
// ==========================================
// Esta función prepara todo para empezar una partida desde cero.
// Se ejecuta al cargar la página y también cada vez que tocamos el botón "Reiniciar".
function iniciarJuego() {
    // Genera un número entero aleatorio entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("El numero secreto es: " + numeroSecreto);
    // Reiniciamos el contador a 3 intentos
    intentos = 3;

    // Limpiamos el input donde se escribe el número
    document.getElementById("numero").value = "";

    // Volvemos a habilitar el input y el botón por si estaban bloqueados
    document.getElementById("numero").disabled = false;
    document.getElementById("btnProbar").disabled = false;

    // Mostramos los 3 corazones en pantalla
    mostrarIntentos();

    // Ocultamos el mensaje de alerta cambiando sus clases a "alert d-none"
    let mensaje = document.getElementById("mensaje");
    mensaje.className = "alert d-none";
    mensaje.innerText = "";

    // Vaciamos el contenido del historial
    document.getElementById("historial").innerHTML = "";
}

// ==========================================
// FUNCIÓN: mostrarIntentos
// ==========================================
// Muestra 3 corazones (vidas) y cuando se pierde un intento se transforma en un cráneo
function mostrarIntentos() {
    let contenedor = document.getElementById("intentos");
    let totalIntentos = 3;
    let html = "";

    for (let i = 0; i < totalIntentos; i++) {
        if (i < intentos) {
            // Corazón rojo activo de Bootstrap Icons
            html += '<i class="bi bi-heart-fill text-danger me-1"></i>';
        } else {
            // Cráneo de esqueleto por intento perdido
            html += '<i class="fa-solid fa-skull text-secondary me-1"></i>';
        }
    }

    contenedor.innerHTML = html;
}

// ==========================================
// FUNCIÓN: probar
// ==========================================
// Esta función se ejecuta cada vez que el usuario hace clic en el botón "Probar".
function probar() {
    let input = document.getElementById("numero");
    let numero = parseInt(input.value);
    let mensaje = document.getElementById("mensaje");
    let lista = document.getElementById("historial");

    // ==========================================
    // VALIDACIÓN DE LA ENTRADA
    // ==========================================
    // Verificamos que sea un número válido y esté entre 1 y 100
    if (isNaN(numero) || numero < 1 || numero > 100) {
        mensaje.className = "alert alert-warning";
        mensaje.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Ingresa un número válido entre 1 y 100.';
        return; // Corta la función sin gastar intento
    }

    // Si es válido, descontamos un intento y actualizamos los corazones/calaveras
    intentos--;
    mostrarIntentos();

    // ==========================================
    // CREAR ELEMENTO CON createElement() Y appendChild()
    // ==========================================
    let item = document.createElement("li");
    item.className = "list-group-item";

    // ==========================================
    // COMPARACIONES DEL JUEGO
    // ==========================================

    // CASO 1: El usuario acertó el número
    if (numero === numeroSecreto) {
        mensaje.className = "alert alert-success";
        mensaje.innerHTML = `<i class="bi bi-trophy-fill"></i> ¡Acertaste! El número era ${numeroSecreto}.`;

        // Asignamos el texto y el ícono al <li> creado
        item.innerHTML = `<i class="bi bi-check-circle-fill text-success"></i> Intento con el ${numero} - ¡Acertaste!`;
        // Insertamos el <li> dentro del <ul> usando appendChild()
        lista.appendChild(item);

        // Deshabilitamos los controles al ganar
        document.getElementById("btnProbar").disabled = true;
        document.getElementById("numero").disabled = true;

        // CASO 2: No acertó, pero todavía le quedan intentos
    } else if (intentos > 0) {
        if (numero > numeroSecreto) {
            mensaje.className = "alert alert-info";
            mensaje.innerHTML = '<i class="bi bi-arrow-down-circle-fill"></i> Te pasaste.';
            item.innerHTML = `<i class="bi bi-arrow-down-circle text-primary"></i> Intento con el ${numero} - Te pasaste`;
        } else {
            mensaje.className = "alert alert-info";
            mensaje.innerHTML = '<i class="bi bi-arrow-up-circle-fill"></i> Te faltó.';
            item.innerHTML = `<i class="bi bi-arrow-up-circle text-info"></i> Intento con el ${numero} - Te faltó`;
        }

        // Agregamos el <li> al <ul> con appendChild()
        lista.appendChild(item);

        // CASO 3: No acertó y se le acabaron los 3 intentos
    } else {
        mensaje.className = "alert alert-danger";
        mensaje.innerHTML = `<i class="bi bi-x-circle-fill"></i> No acertaste. El número era ${numeroSecreto}.`;

        item.innerHTML = `<i class="bi bi-x-circle-fill text-danger"></i> Intento con el ${numero} - Fallaste`;
        lista.appendChild(item);

        // Deshabilitamos los controles al perder
        document.getElementById("btnProbar").disabled = true;
        document.getElementById("numero").disabled = true;
    }

    // Limpiamos el input para el próximo intento
    input.value = "";
}

// ==========================================
// FUNCIÓN: reiniciar
// ==========================================
function reiniciar() {
    iniciarJuego();
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
window.onload = iniciarJuego;
