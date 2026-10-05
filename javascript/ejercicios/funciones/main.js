function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = resultado
}


function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

function imprimirMensaje(esMayor) {
    if (esMayor === true) {
        document.getElementById("esMayor").innerText = "Usted es mayor de edad"
    } else {
        document.getElementById("esMayor").innerText = "Usted es menor de edad"
    }
}

function ejecutar() {
    let edad = parseFloat(document.getElementById("edad").value);

    let res = esMayorDeEdad(edad);

    imprimirMensaje(res);

}