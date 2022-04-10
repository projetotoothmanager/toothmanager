const express = require('express');
const router = express.Router();
const Pagamentos_controller = require('../controller/Pagamento_controller');

//*routes
router.get('/Pagamentos', Pagamentos_controller.Pagamentos)




module.exports = router;