const express = require('express');
const indexController = require('../controller/indexController');
const router = express.Router();

//*routes
router.get('/', indexController.showHome)


module.exports = router;