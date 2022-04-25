const express = require('express');
const router = express.Router();
const cadastro_cliente_controller = require('../controller/cadastro_cliente_controller');
const validador_login_auth = require('../../funcoes_div/valid_auht').validador_login_auth

//*routes
router.get('/cadastro', validador_login_auth, cadastro_cliente_controller.cadastro_cliente)
router.post('/cadastro_cliente', validador_login_auth, cadastro_cliente_controller.cadastro_cliente_post);





module.exports = router;