const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//*routes
router.get('/login', authController.login);
router.post('/login', authController.loginPost);
router.get('/registrar', authController.registrar);
router.post('/registrar', authController.registrarPost);
router.get('/logout', authController.logout);

module.exports = router;