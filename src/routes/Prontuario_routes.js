const express = require('express');
const router = express.Router();
const prontuario_controller = require('../controller/prontuario_controller');
const validador_login_auth = require('../../funcoes_div/valid_auht').validador_login_auth


//*routes
router.get('/lista_Prontuario', validador_login_auth, prontuario_controller.prontuario);

router.get('/detalhes_Prontuario', validador_login_auth, prontuario_controller.detalhes_prontuario);


router.get('/criar_prontuario', validador_login_auth, prontuario_controller.criar_prontuario);
router.post('/form_prontuario', validador_login_auth, prontuario_controller.form_prontuario);



//router.post('/cadastro_cliente', cadastro_cliente_Controller.cadastro_cliente);





module.exports = router;