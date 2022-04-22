const express = require('express');
const router = express.Router();
const agendamento_controller = require('../controller/agendamento_controller');

//*routes
router.get('/agendamento', agendamento_controller.agendamento)


module.exports = router;