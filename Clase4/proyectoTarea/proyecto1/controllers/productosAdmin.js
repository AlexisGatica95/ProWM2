var express = require('express');
var router = express.Router();

const productosModel = require('../models/productosModel');

//PUT, DELETE , POST, GET

router.post('/',async(req,res,next)=> {
try{
// insert into productos set ?, obj y el objeto tiene que coincidir con las lineas de la tabla sin importar el orden 
    console.log(req.body.nombre_p);
let obj = {
     nombre_p : req.body.nombre_p,
     descripcion_p : req.body.descripcion_p,
     precio_p : req.body.precio_p,
     stock_p : req.body.stock_p,
     imagen_p : req.body.imagen_p
 }
let productos_insert = await productosModel.insertProducto(obj);
if(productos_insert != undefined) {
    res.json({status : 'ok', id : productos_insert});
}

} catch(error) {
    console.log('entro al catch del controller');
    console.log(error);
    res.status(500).json({status : 'error'});
}
});

router.delete('/:id_p',async (req,res,next)=>{
 try {
        let id_p = req.params.id_p;
        let fueBorrado = await productosModel.borrarProducto(id_p);
        if (fueBorrado) {
            res.json({status: 'ok', borrado : id_p});
        }

 } catch (error) {
     console.log(error);
 }

});


module.exports = router;