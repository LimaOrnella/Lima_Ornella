
function mostrarFecha(meses) {
    let num = parseInt(prompt('ingrese un valor del 1 al 12:'));
    document.write('Corresponde al mes:' + meses[num - 1]);
    document.write('<br>');
}

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostrarFecha(meses);
