const express = require('express');
const index_controller = require('../controller/index_controller');
const router = express.Router();

//*routes
router.get('/', index_controller.show_home)


module.exports = router;