const express = require('express');

//Conferir
const mainController = require('../controller/maincontroller');
const router = express.Router();


// Rota principal
router.get('/', mainController.showHome)





//Tem que ser alterado

router.get('/agenda', function (req, res, next) {

  res.render('agenda', {
    title: 'Express'
  })
});

router.get('/cadastro', function (req, res, next) {

  res.render('cadastro', {
    title: 'Express'
  })
});
router.get('/teste', function (req, res, next) {

  res.render('cadastro2', {
    title: 'Express'
  })
});

router.get('/caixa', function (req, res, next) {

  res.render('caixa', {
    title: 'Express'
  })
});

router.get('/prontuario', function (req, res, next) {

  res.render('prontuario', {
    title: 'Express'
  })
});

router.get('/login', function (req, res, next) {

  res.render('login', {
    title: 'Express'
  })
});
router.get('/prontuario2', function (req, res, next) {

  res.render('prontuario2', {
    title: 'Express'
  })
});



module.exports = router;