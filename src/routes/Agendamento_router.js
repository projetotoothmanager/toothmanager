const express = require('express');
const router = express.Router();
const agendamento_controller = require('../controller/agendamento_controller');

//*routes
router.get('/agendamento', agendamento_controller.agendamento)
router.post('/form_agendamento', agendamento_controller.form_agendamento)


module.exports = router;