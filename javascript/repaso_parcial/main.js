let intentos = 3;
let numeroAlAzar

function iniciarJuego(){
    numeroAlAzar = Math.floor(Math.random() * 100) + 1;

    console.log(numeroAlAzar)
    intentos = 3;

    
    document.getElementById("numeroIngresado").innerText = ""
    document.getElementById("numeroIngresado").disabled = false

    document.getElementById("btnProbar").disabled = false;

    document.getElementById("alerta").className = "alert alert-info";
    document.getElementById("alerta").innerHTML = "Tienes 3 intentos para adivinar el número entre 1 y 100";
    mostrarIntentos();

    document.getElementById("historialIntentos").innerHTML = '';
}

function mostrarIntentos() {
    let contenedor = document.getElementById("intentosRestantes");
    let html = "";
    for (let i = 0; i < 3; i++) {
        if (i < intentos) {
            html += '<i class="bi bi-heart-fill text-danger me-1"></i>';
        } else {
            html += '<i class="fa-solid fa-skull text-secondary me-1"></i>';
        }
    }
    contenedor.innerHTML = html;
}


function jugar(){
    let input = document.getElementById("numeroIngresado")
    let alerta = document.getElementById("alerta");
    let valor = parseFloat(input.value);
    let historial = document.getElementById("historialIntentos")

    if ( isNaN(valor) || valor < 1 || valor > 100){
        alerta.className = "alert alert-danger";
        alerta.innerHTML = "Ingrese un número válido entre 1 y 100";
        return;
    }

    intentos--
    mostrarIntentos();

    if(valor === numeroAlAzar){
        alerta.className = 'alert alert-success'
        alerta.innerText = `Acertaste el numero era ${numeroAlAzar}`

        historial.innerHTML += `<li class="list-group-item"> Intento con el ${valor} - Acertaste</li>`

        document.getElementById("btnProbar").disabled = true;
        document.getElementById("numeroIngresado").disabled = true;
    } else if (intentos > 0){
        if(valor>numeroAlAzar){
            alerta.className = "alert alert-info"
            alerta.innerText = "Te pasaste."

            historial.innerHTML += `<li class="list-group-item">Intento con el numero ${valor} - Te pasaste</li>`
        }else{
            alerta.className = 'alert alert-danger'
            alerta.innerText = 'Te faltó'

            historial.innerHTML += `<li class="list-group-item">Intento con el numero ${valor} - Te faltó`
        }
    } else if (intentos === 0) {
    
        alerta.className = 'alert alert-danger'
        alerta.innerText = `No acertaste, el numero era ${numeroAlAzar}`
        
        
        historial.innerHTML += `<li class="list-group-item">Intento con el ${valor} - Fallaste</li>`

        document.getElementById("btnProbar").disabled =true
        document.getElementById("numeroIngresado").disabled = true
    }else{
        return
    }

    input.value="";
}

window.onload = iniciarJuego