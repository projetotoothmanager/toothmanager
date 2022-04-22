const express = require('express');
const router = express.Router();
const cadastro_cliente_controller = require('../controller/cadastro_cliente_controller');

//*routes
router.get('/cadastro', cadastro_cliente_controller.cadastro_cliente)
router.post('/cadastro_cliente', cadastro_cliente_controller.cadastro_cliente_post);





module.exports = router;