const express = require('express');
const mainController = require('../controller/maincontroller');
const router = express.Router();

//*routes
router.get('/login', mainController.showHome)



router.get('/prontuario2', function (req, res, next) {

  res.render('pagamentos', {
    title: 'Express'
  })
});


module.exports = router;
