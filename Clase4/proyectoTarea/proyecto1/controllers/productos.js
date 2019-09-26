var express = require('express');
var router = express.Router();

const ProductoM = require('../models/productosModel');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('productos', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('productos', { title: 'Express' });
  
});

module.exports = router;