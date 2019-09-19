// -- Codigo escrito por terceros --
function demoroEnResponder() {
    return new Promise( function(resolve, reject) {
        setTimeout(function() {
            console.log('Finalizo el proceso de demoroEnResponder')
            resolve()
        }, 1000);
    });
}

// -- Nuestro código --
// La funcion demoro en responder demora 1 segundo en responder

//si pongo un await antes de la funcion tengo que colocar un ASYNC para indicar que es una fn asc

async function iniciar() {
    console.log('Antes');
    
    /* solo con AWAIT espera en responder para seguir*/
    
    await demoroEnResponder() 
    // Que pasa aca, se ejecuta la siguiente linea antes de finalizar esta operacion
    console.log('Despues');
}

//callback->promises->async/away

function iniciarpromise() {
    console.log('antes');
    demoroEnResponder().then(function(total){
        //cuando se termina de ejecutar ejecuto lo de luego del THEN    
        console.log(total);
    }).catch(function(error){
        //luego de CATCH se pone lo que se ejecuta si ocurre un error        
})
console.log('finalizar');
}

iniciar();

