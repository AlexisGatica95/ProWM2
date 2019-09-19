
/*funcionquedemora(function() {
    console.log('ok');
})
*/
function alFinalizar() {
    console.log('ok');
}
functionquedemora(alFinalizar)

console.log('antes');
functionquedemora(alFinalizar);
console.log('despues');

/* en js la documentacion dice cuales funciones son asincronicas, conexion con algo externo generalmente es asincronico
*/ 

/* set interval (1000, funcion), cada 1 seg llama a la funcion
set timeout (funcion , 1000)
*/

/* si no voy a reutilizar lo escribo dentro */
functionquedemora(function() {
    console.log('ok');
});

/*son lo mismo */

functionquedemora(() => {
    console.log('ok');
});

/* todo codigo dependiente de alfinalizar lo coloco dentro*/



