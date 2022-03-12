const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res ,next) {
  res.render('login', { title: 'Express'})
});

router.get('/agenda', function(req, res , next) {
  res.render('index', { title: 'Express'})
});

router.get('/cadastro', function(req, res , next) {
  res.render('cadastro', { title: 'Express'})
});

router.get('/caixa', function(req, res , next) {
  res.render('caixa', { title: 'Express'})
});

router.get('/prontuario', function(req, res , next) {
  res.render('prontuario', { title: 'Express'})
});



module.exports = router;
