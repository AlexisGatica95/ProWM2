var express = require('express');
var router = express.Router();

const ReservaM = require('../models/reservasModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;