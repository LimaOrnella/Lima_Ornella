let dia, mes,año;
mes=prompt('Ingrese un numero del mes:','');
mes=parseInt(mes);

if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)
{
    document.write('este mes tiene 31 dias.');
}
else 
{
    if (mes==2)
    document.write('este mes tiene 28 dias y en año bisciesto tiene 29');
else
document.write('este mes tiene 30 dias');
}

