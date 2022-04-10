const express = require('express');
const router = express.Router();
const Prontuario_controller = require('../controller/Prontuario_controller');

//*routes
router.get('/listaProntuario', Prontuario_controller.prontuario);

router.get('/detalhesProntuario', Prontuario_controller.detalhesProntuario);



//router.post('/cadastro_cliente', cadastro_cliente_Controller.cadastro_cliente);





module.exports = router;