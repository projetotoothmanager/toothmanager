const express = require('express');
const mainController = require('../controller/maincontroller');
const router = express.Router();

//*routes
router.get('/login', mainController.showHome)

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
/* PAGAMENTOS */
router.get('/pagamentos', function (req, res, next) {

  res.render('pagamentos', {
    title: 'Express'
  })
});


module.exports = router;
