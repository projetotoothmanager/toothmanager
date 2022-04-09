const express = require('express');
const router = express.Router();
const Caixa_Controller = require('../controller/Caixa_controller');

//*rotas
router.get('/caixa', Caixa_Controller.caixa)




module.exports = router;