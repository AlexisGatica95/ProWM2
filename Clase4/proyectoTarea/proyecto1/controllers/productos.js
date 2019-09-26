var express = require('express');
var router = express.Router();

//incluimos nuestro moldel que hace una consulta a nuestra base de datos
//var = const

const ProductoM = require('../models/productosModel');

/* GET home page. */

// req : request que llegan al server del cliente 3 formas de comunicarme con el server
//req.body : llega la info que viene por post a traves de un formulario
//req.params: productos/1
//req.query: 

//res: respuesta 
//res.render: genera una vista

//netx() si no pongo respuesta corta el flujo de datos y sale de la funcion, es como un brake

router.get('/',async (req, res, next) => {
  try {
     let productos = await ProductoM.getProductos();
      console.log(productos);
      res.json({productos});
} catch (error) {
  res.json({status: 'error'});
}

 

});

//sintexis para obtenerlo

router.get('/:id', async (req, res, next) => {
  try { //parseint tranforma el entero
    var id_p = parseInt(req.params.id);
    //las dos formas para el entero
    if(Number.isInteger(id_p)) {
      var producto = await ProductoM.getProducto(id_p);
      if (producto.length > 0) {
        res.json({status: 'ok', data: producto, cantidad: producto.length});
      } else {
        res.json({status: 'ok', cantidad: 0});
      }
    } else {
      res.json({status: 'invalid'});
    }
  } catch (error) {
    console.log(error);
    console.log(req.params.id);
    res.status(500).json({ status : 'error', error: error});
  }
  
});

//interactura con el model a travez  fel metodo getProducto y le dice que el usuario esta solicitando un producto 1

module.exports = router;

//con el export se comunica