const express = require('express');
var algorithm = require('./algorithm/algorithm');
const router = express.Router();

router.use('/algorithm',algorithm);

module.exports = router;