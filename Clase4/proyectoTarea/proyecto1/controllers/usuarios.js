var express = require('express');
var router = express.Router();

const usuariosM = require('../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;