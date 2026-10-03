function calcular(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    let operation = document.getElementById("operacion").value;
    let resultado;

    switch(operation){
        case "suma":
            resultado=num1+num2;
        break
        case "resta":
            resultado = num1 - num2;
        break
        case "multiplicacion":
            resultado=num1*num2;
        break
        case "division":
            if(num2 !== 0){
                resultado = num1/num2
            } else {
                resultado = `No se puede dividir entre 0 `
            }
        break
        default:
            resultado = `Operacion no valida`
    }

    document.getElementById("resultado").innerHTML = `La cantidad de pollitas que se come el marquitos es: ${resultado}`
}




function limpiar(){
    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value= ''

    document.getElementById("operacion").selectedIndex = 0;
    document.getElementById("resultado").innerHTML=''
}