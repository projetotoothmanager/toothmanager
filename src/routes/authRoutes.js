const express = require('express');
const router = express.Router();
const authController = require('../controller/authcontroller');

//*routes
router.get('/login', authController.login)
router.post('/login', authController.loginpost);
router.get('/logout', authController.logout); //saida do sistema


module.exports = router;