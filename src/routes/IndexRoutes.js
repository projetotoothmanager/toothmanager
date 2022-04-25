const express = require('express');
const indexController = require('../controller/index_controller');
const router = express.Router();

//*routes
router.get('/', indexController.show_home)


module.exports = router;