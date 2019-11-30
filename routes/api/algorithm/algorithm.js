var express = require('express');
var ctrl = require('./algorithm.ctrl');

var router = express.Router();

/* GET users listing. */
router.get('/:name',ctrl.show);

module.exports = router;
