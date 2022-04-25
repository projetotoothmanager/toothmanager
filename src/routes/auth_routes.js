const express = require('express');
const router = express.Router();
const auth_controller = require('../controller/auth_controller');

//*routes
router.get('/login', auth_controller.login)
router.post('/login', auth_controller.login_post);
router.get('/registrar', auth_controller.registrar)
router.post('/registrar', auth_controller.registrar_post)
router.get('/logout', auth_controller.logout); //saida do sistema

module.exports = router;