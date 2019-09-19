//propiedad:valor

var obj = 
    //aca dentro defino un array
    //empiezo un array por 0,
    [
        {
            nombre : 'alexio',
            tarea : 'nodeJS',
            nivel : 'malo',
            excusas : ['ashdjkjasd'],
            id : '3'
        },
        {
            nombre : 'ari',
            tarea : 'empanadas',
            nivel : 'alto',
            excusas : ['ashdjkjasd','123123123'],
        }
    ];

console.log(obj[0].id+' '+obj[0].nombre);
//<3
 console.log(obj[1].excusas[1]);
