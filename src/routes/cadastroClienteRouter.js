const express = require('express');
const router = express.Router();
const CadastroClienteController = require('../controller/cadastroClienteController');
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth

router.get('/cadastro', validadorLoginAuth, CadastroClienteController.cadastroCliente)
router.post('/cadastro', validadorLoginAuth, CadastroClienteController.cadastroSave);
router.get('/listaPacientes', validadorLoginAuth, CadastroClienteController.show);

module.exports = router;