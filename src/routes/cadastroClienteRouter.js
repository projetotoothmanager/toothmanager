const express = require('express');
const router = express.Router();
const cadastroClienteController = require('../controller/cadastroClienteController');
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth

//*routes
router.get('/cadastro', validadorLoginAuth, cadastroClienteController.cadastroCliente)
router.post('/cadastro', validadorLoginAuth, cadastroClienteController.cadastroSave);




module.exports = router;