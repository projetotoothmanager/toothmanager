const express = require('express');
const router = express.Router();
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth
const AgendamentoController = require('../controller/agendamentoController');

router.get('/agendamentos', validadorLoginAuth, AgendamentoController.agendamento);
router.post('/agendamentos', validadorLoginAuth, AgendamentoController.save);
router.post('/agendamentos/remove/:id', validadorLoginAuth, AgendamentoController.remove);
router.post('/agendamentos/editAgendamento/:id', validadorLoginAuth, AgendamentoController.update);
router.get('/agendamentos/editAgendamento', validadorLoginAuth, AgendamentoController.updateSave);

module.exports = router;