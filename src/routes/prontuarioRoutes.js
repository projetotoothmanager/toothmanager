const express = require('express');
const router = express.Router();
const prontuarioController = require('../controller/prontuarioController');
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth


//*routes
router.get('/Prontuario', validadorLoginAuth, prontuarioController.prontuario);

router.get('/detalhesProntuario', validadorLoginAuth, prontuarioController.detalhesProntuario);


router.get('/addprontuario', validadorLoginAuth, prontuarioController.addprontuario);
router.post('/addprontuario', validadorLoginAuth, prontuarioController.prontuarioSave);







module.exports = router;