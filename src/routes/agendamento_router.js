const express = require('express');
const router = express.Router();
const validador_login_auth = require('../../helpers/valid_auht').validador_login_auth

const agendamento_controller = require('../controller/agendamento_controller');

//*routes
router.get('/agendamento', validador_login_auth, agendamento_controller.agendamento)
router.post('/agendamento', validador_login_auth, agendamento_controller.agendamento_save)
router.post('/agendamento/remove', validador_login_auth, agendamento_controller.agendamento_remove)
router.get('/agendamento/edit', validador_login_auth, agendamento_controller.agendamento_update_save)
router.post('/agendamento/edit/:id', validador_login_auth, agendamento_controller.agendamento_update)


module.exports = router;