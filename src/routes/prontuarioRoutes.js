const express = require('express');
const router = express.Router();
const prontuarioController = require('../controller/prontuarioController');
const validadorLoginAuth = require('../../helpers/validAuht').validadorLoginAuth

router.get('/prontuarios', validadorLoginAuth, prontuarioController.prontuario);
router.get('/detalhesProntuario', validadorLoginAuth, prontuarioController.detalhesProntuario);
router.get('/addprontuario', validadorLoginAuth, prontuarioController.addProntuario);
router.post('/addprontuario', validadorLoginAuth, prontuarioController.save);
router.post('/prontuarios/remove/:id', validadorLoginAuth, prontuarioController.remove);
router.post('/prontuarios/editProntuarios/:id', validadorLoginAuth, prontuarioController.update);
router.get('prontuarios/editProntuarios', validadorLoginAuth, prontuarioController.updateSave)

module.exports = router;