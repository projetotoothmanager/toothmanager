const express = require('express');
const router = express.Router();
const validador_login_auth = require('../../funcoes_div/valid_auht').validador_login_auth

const agendamento_controller = require('../controller/agendamento_controller');

//*routes
router.get('/agendamento', validador_login_auth, agendamento_controller.agendamento)
router.post('/form_agendamento', validador_login_auth, agendamento_controller.form_agendamento)


module.exports = router;