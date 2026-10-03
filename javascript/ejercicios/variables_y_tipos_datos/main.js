document.getElementById("botonCalcular").onclick = function(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let ciudad = document.getElementById("ciudad").value
    let calculo = edad*365

    let resultado = `Su nombre es ${nombre}, vive en ${ciudad}, su edad es de ${edad} años y usted vivió ${calculo} días`

    document.getElementById("resultado").innerHTML = resultado
}