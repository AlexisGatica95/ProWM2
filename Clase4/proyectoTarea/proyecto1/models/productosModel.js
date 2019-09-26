const mysql = require('../BD');//

const util = require('util');
const query = util.promisify(mysql.query).bind(mysql);


async function getProductos() {
    //se realiza una consulta de todos los productos de la tabla
    //el bloque try ctach propio de funcione sasincronicas

    try {
        const rows = await query('SELECT * from productos');
        return rows;
        //rows nos devuelve un array de objetos 

    }
    catch(error){
        console.log(error);

    }

}

async function getProducto(id){
    try{
        const rows = await query ('select * from productos where id_p= ?',id);
        return rows;

        //await query para hacer cualquier consulta
        //las columnas las especificamos dentro del objeto

    } catch (error) { 
        console.log(error);

    }
}

module.exports = {
    getProductos,
    getProducto
}