const express = require('express');
const router = express.Router();
const prontuario_controller = require('../controller/prontuario_controller');
const validador_login_auth = require('../../helpers/valid_auht').validador_login_auth


//*routes
router.get('/Prontuario', validador_login_auth, prontuario_controller.prontuario);

router.get('/detalhes_Prontuario', validador_login_auth, prontuario_controller.detalhes_prontuario);


router.get('/addprontuario', validador_login_auth, prontuario_controller.addprontuario);
router.post('/addprontuario', validador_login_auth, prontuario_controller.prontuario_save);







module.exports = router;