const express = require('express');
const router = express.Router();
const cadastro_cliente_controller = require('../controller/cadastro_cliente_controller');
const validador_login_auth = require('../../helpers/valid_auht').validador_login_auth

//*routes
router.get('/cadastro', validador_login_auth, cadastro_cliente_controller.cadastro_cliente)
router.post('/cadastro', validador_login_auth, cadastro_cliente_controller.cadastro_save);




module.exports = router;