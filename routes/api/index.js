const express = require('express');
var algorithm = require('./algorithm/algorithm');
var etc = require('./etc/etc');
const router = express.Router();

router.use('/algorithm',algorithm);
router.use('/etc',etc);
module.exports = router;