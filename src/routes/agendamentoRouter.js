const express = require('express');
const router = express.Router();
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth

const agendamentoController = require('../controller/agendamentoController');

//*routes
router.get('/agendamento', validadorLoginAuth, agendamentoController.agendamento)
router.post('/agendamento', validadorLoginAuth, agendamentoController.agendamentoSave)
router.post('/agendamento/remove', validadorLoginAuth, agendamentoController.agendamentoRemove)
router.get('/agendamento/edit', validadorLoginAuth, agendamentoController.agendamentoUpdateSave)
router.post('/agendamento/edit/:id', validadorLoginAuth, agendamentoController.agendamentoUpdate)


module.exports = router;