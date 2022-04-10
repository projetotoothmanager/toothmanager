const express = require('express');
const Index_controller = require('../controller/Index_controller');
const router = express.Router();

//*routes
router.get('/', Index_controller.show_Home)



router.get('/prontuario2', function (req, res, next) {

  res.render('pagamentos', {
    title: 'Express'
  })
});


module.exports = router;