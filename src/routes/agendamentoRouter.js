const express = require('express');
const router = express.Router();
const validador_login_auth = require('../../funcoes_div/valid_auht').validador_login_auth

const agendamentoController = require('../controller/agendamentoController');

//*routes
router.get('/agendamento', validador_login_auth, agendamentoController.agendamento)
router.post('/form_agendamento', validador_login_auth, agendamentoController.form_agendamento)


module.exports = router;