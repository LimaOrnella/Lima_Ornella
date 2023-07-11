function saltarlinea() {

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

}

function imprimir(frase) {

    document.write(frase);
    saltarlinea();

}

var contador = 2;

while (contador <= 100) {

    imprimir(contador);
    contador = contador + 2;
}

imprimir("fin");