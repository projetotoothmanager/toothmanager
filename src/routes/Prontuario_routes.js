const express = require('express');
const router = express.Router();
const prontuario_controller = require('../controller/prontuario_controller');

//*routes
router.get('/lista_Prontuario', prontuario_controller.prontuario);

router.get('/detalhes_Prontuario', prontuario_controller.detalhes_prontuario);

router.get('/criar_prontuario', prontuario_controller.criar_prontuario);



//router.post('/cadastro_cliente', cadastro_cliente_Controller.cadastro_cliente);





module.exports = router;