const express = require('express');
const mainController = require('../controller/maincontroller');
const router = express.Router();

/* GET home page. */

/* quando chamar a '/' passa pela controller que renderiza o login */
router.get('/', mainController.index)

router.get('/login', function(req, res ,next) {
  res.render('login', { title: 'Express'})
});

router.get('/agenda', function(req, res , next) {
  res.render('agenda', { title: 'Express'})
});

router.get('/cadastro', function(req, res , next) {
  res.render('cadastro', { title: 'Express'})
});
router.get('/teste', function(req, res , next) {
  res.render('cadastro2', { title: 'Express'})
});

router.get('/caixa', function(req, res , next) {
  res.render('caixa', { title: 'Express'})
});

router.get('/prontuario', function(req, res , next) {
  res.render('prontuario', { title: 'Express'})
});



module.exports = router;
