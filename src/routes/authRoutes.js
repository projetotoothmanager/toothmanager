const express = require('express');
const router = express.Router();
const authController = require('../controller/authcontroller');

//*rotas
router.get('/login', authController.login)
router.get('/register', authController.register)
router.post('/register', authController.registerpost) // metodo de registro de dados no banco
router.get('/logout', authController.logout); //saida do sistema





module.exports = router;