document.getElementById("calcular").onclick = function(){
    const text = document.getElementById("texto").value
    const long = text.trim().length

    document.getElementById("resultado").innerText = `La longitud del texto es: ${long}`
}