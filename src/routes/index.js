const express = require('express');
const mainController = require('../controller/maincontroller');
const router = express.Router();


// Rota principal
router.get('/', mainController.showHome)



router.get('/prontuario2', function (req, res, next) {

  res.render('prontuario2', {
    title: 'Express'
  })
});



module.exports = router;