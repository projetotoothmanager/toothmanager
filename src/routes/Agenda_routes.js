const express = require('express');
const router = express.Router();
const Agenda_Controller = require('../controller/Agenda_controller');

//*routes
router.get('/agenda', Agenda_Controller.agenda)


module.exports = router;