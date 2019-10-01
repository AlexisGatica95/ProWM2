const mysql = require('../BD');//

const util = require('util');
const query = util.promisify(mysql.query).bind(mysql);

async function insertProducto(obj) {
    try{
        const rows = await query ('insert into productos set ?',obj);

        //underfined insertId 


        return rows.insertId;
        } catch (err) {
            console.log('entro al catch del model');
            console.log(err);
        }
    }

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

async function getProductosPrecio(min,max) {
try{
    const rows = await query("select * from productos where precio_p >= ? and precio_p <= ?" , [min,max]);
    return rows;
    } catch (err) {
        console.log(err);
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

async function borrarProducto(id){
    try {
        let rows = await query ('delete from productos where id_p = ?',id );
        return rows;

    } catch (error) {
        cosole.log(error);
    }
}

module.exports = {
    getProductos,
    getProducto,getProductosPrecio,insertProducto,borrarProducto
}