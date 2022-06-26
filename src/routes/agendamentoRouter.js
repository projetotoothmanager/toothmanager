const express = require('express');
const router = express.Router();
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth
const agendamentoController = require('../controller/agendamentoController');

router.get('/agendamentos', validadorLoginAuth, agendamentoController.agendamento);
router.post('/agendamentos', validadorLoginAuth, agendamentoController.save);
router.post('/agendamentos/remove/:id', validadorLoginAuth, agendamentoController.remove);
router.post('/agendamentos/editAgendamento/:id', validadorLoginAuth, agendamentoController.update);
router.get('/agendamentos/editAgendamento', validadorLoginAuth, agendamentoController.updateSave);

module.exports = router;