//se hace fuera de public

//incluimos el modulo de la DB obviamente

const mysql = require('mysql');//mysql hace referencia al modulo instalado
const util = require('util');//utils hace referencia al modulo instalado

//msql --> puede reotrnar un promise
// util se utiliza para hacer funciones asincronicas

//lo trabajo de manera asincronica para poder retornar el resultado

//bind da un alias(genera una rederencia) y genera un contexto especifico

//  ESTO VA A SER UNA FUNCION ASINCRONICA   

//const query = util.promisify(mysql.query).bind(mysql);

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password : '',
    database: 'carrito',
    connectionLimit :10
});

//connectionlimit : definimos la cantidad mazima de conecziones simultaneas que tendra mysq, las demas quedaran pendientes.

pool.getConnection((error,respuesta) => {
    //cuando configuramos donde nos conectamos con el pool
    if(error) throw error;
    return respuesta;
});

module.exports= pool;