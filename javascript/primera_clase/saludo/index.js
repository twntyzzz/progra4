function unirApellidoNombre() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value

    document.getElementById("resultado").innerHTML="Hola " + apellido + ", " + nombre 

}