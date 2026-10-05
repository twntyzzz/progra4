function calcular() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operacion = document.getElementById('operacion').value;
  var resultado;

  switch (operacion) {
    case 'sum':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = "No se puede dividir por cero";
      }
      break;
    default:
      resultado = "Operación no válida";
  }

  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = "El resultado es: <span style='color:red;'>" + resultado + "</span>";
}

function limpiar() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operacion').selectedIndex = 0;
  document.getElementById('resultado').innerHTML = '';