//funciones y funciones asincronicas
//js no acepta tipo de datos en las variables- var,let,const


var intervalo_array= [];


function intervalo(numero1,numero2){
    //esta funcion debe mostrar elintervalo entre num2 y num1
    //comprobamos que num2>num1

    //

    if(numero2>numero1) {
        for( var i= numero1; i<=numero2; i++){
            
            //console.log("["+i+"]");
            intervalo_array.push(i);

        }
            console.log(intervalo_array);

    } else {
        console.log("el seg numero debe ser mayor al primero");
    }

}

intervalo(2,5);


//nodejs es un entorno de trabajo qeu interpreta js xq los navegadores no interpretan otra cosa que js

//--------------------------------
//meto datos
//y que salfa con (output) con dia mes año
function formatDate(d,m,y){
    var output="Dia "+d+" del mes ";
    switch(m) {
        case 1: //mes enero
        output = output +'enero';
        break;
        case 2:
        output = output +'febrero';
        break;
        case 3:
        output = output +'marzo';
        break;
        case 4:
        output = output +'abril';
        break;
    }
     output= output+' del '+ y; 
 
     return (output);

     //retorna un string


    }
    
    function mostrarFecha(dato){
        console.log(dato);
    }

 var dato_formateado = formatDate(16,2,1995);

 mostrarFecha(dato_formateado);

