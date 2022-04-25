const express = require('express');
const router = express.Router();
const cadastroClienteController = require('../controller/cadastroClienteController');
const validador_login_auth = require('../../funcoes_div/valid_auht').validador_login_auth

//*routes
router.get('/cadastro', validador_login_auth, cadastroClienteController.cadastroCliente)
router.post('/cadastro_cliente', validador_login_auth, cadastroClienteController.cadastroClientePost);





module.exports = router;