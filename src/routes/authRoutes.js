const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');

//*routes
router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost);
router.get('/registrar', AuthController.registrar)
router.post('/registrar', AuthController.registrarPost)
router.get('/logout', AuthController.logout); //saida do sistema

module.exports = router;