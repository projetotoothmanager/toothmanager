const express = require('express');
const router = express.Router();
const prontuario_Controller = require('../controller/Prontuario_controller');

//routas
router.get('/prontuario', prontuario_Controller.prontuario);
//router.post('/cadastro_cliente', cadastro_cliente_Controller.cadastro_cliente);





module.exports = router;