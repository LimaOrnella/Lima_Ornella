var numero = prompt("Por favor ingrese un número entero");

var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "El numero ingresado es par";
  }
  else {
    return "El numero ingresado es impar";
  }
}