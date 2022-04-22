const express = require('express');
const router = express.Router();
const Agendamento_Controller = require('../controller/Agendamento_controller');


//*routes
router.get('/agendamento', Agendamento_Controller.agendamento)


module.exports = router;