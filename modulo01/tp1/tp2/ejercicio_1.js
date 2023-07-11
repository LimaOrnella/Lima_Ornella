var valores = [true, false, 2, "hola", "mundo", 3, "char"];


var strings = valores.filter((elemento) => {
        return typeof(elemento) === 'string';
    });

var mayor;

strings.forEach( (elemento) => {
    if( mayor ){
        if ( elemento.length > mayor.length ){
            mayor = elemento;
        }
    }
    else {
        mayor = elemento;
    }
} );

console.log(mayor); 

//operaciones matematicas
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var num1 = valores[0];
var num2 = valores[5];

var suma = num1 + num2;
alert(suma);

var resta = num1 - num2;
alert(resta);

var multiplicacion = num1 * num2;
alert(multiplicacion);

var division = num1 / num2;
alert(division);

var modulo = num1 % num2;
alert(modulo);
