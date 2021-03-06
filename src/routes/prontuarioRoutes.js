const express = require('express');
const router = express.Router();
const ProntuarioController = require('../controller/prontuarioController');
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth

router.get('/prontuarios', validadorLoginAuth, ProntuarioController.prontuario);
router.get('/detalhesProntuario/:id', validadorLoginAuth, ProntuarioController.detalhesProntuario);
router.get('/addprontuario', validadorLoginAuth, ProntuarioController.addProntuario);
router.post('/addprontuario', validadorLoginAuth, ProntuarioController.save);
router.post('/prontuarios/remove/:id', validadorLoginAuth, ProntuarioController.remove);
router.get('/prontuarios/editProntuarios/:id', validadorLoginAuth, ProntuarioController.update);
router.post('/prontuarios/editProntuarios', validadorLoginAuth, ProntuarioController.updateSave)

module.exports = router;