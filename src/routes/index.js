const express = require('express');

//Conferir
const mainController = require('../controller/maincontroller');
const router = express.Router();


// Rota principal
router.get('/', mainController.showHome)

//Tem que ser alterado

/* AGENDA */
router.get('/agenda', function (req, res, next) {

  res.render('agendamento', {
    title: 'Express'
  })
});
/* CADASTRO */
router.get('/cadastro', function (req, res, next) {

  res.render('cadastro', {
    title: 'Express'
  })
});
/* PRONTUARIO */
router.get('/prontuario', function (req, res, next) {

  res.render('listaProntuario', {
    title: 'Express'
  })
});
/* PRONTUARIO DETALHADO DO PACIENTE */
router.get('/prontuario/detalhes', function (req, res, next) {

  res.render('detalhesProntuario', {
    title: 'Express'
  })
});

module.exports = router;
