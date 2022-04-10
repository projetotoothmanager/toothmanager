const express = require('express');
const router = express.Router();
const cadastro_cliente_Controller = require('../controller/cadastro_cliente_controller');

//*routes
router.get('/cadastro', cadastro_cliente_Controller.cadastro_cliente)
//router.post('/cadastro_cliente', cadastro_cliente_Controller.cadastro_cliente);





module.exports = router;