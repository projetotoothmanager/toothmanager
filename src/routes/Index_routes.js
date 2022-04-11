const express = require('express');
const Index_controller = require('../controller/Index_controller');
const router = express.Router();

//*routes
router.get('/', Index_controller.show_Home)

//Tem que ser alterado

// /* AGENDA */
// router.get('/agenda', function (req, res, next) {

//   res.render('agendamento', {
//     title: 'Express'
//   })
// });
// /* CADASTRO */
// router.get('/cadastro', function (req, res, next) {

//   res.render('cadastro', {
//     title: 'Express'
//   })
// });
// /* PRONTUARIO */
// router.get('/prontuario', function (req, res, next) {

//   res.render('listaProntuario', {
//     title: 'Express'
//   })
// });

// router.get('/criarprontuario', function (req, res, next) {

//   res.render('criarProntuario', {
//     title: 'Express'
//   })
// });
// /* PRONTUARIO DETALHADO DO PACIENTE */
// router.get('/prontuario/detalhes', function (req, res, next) {

//   res.render('detalhesProntuario', {
//     title: 'Express'
//   })
// });
// /* PAGAMENTOS */
// router.get('/pagamentos', function (req, res, next) {

//   res.render('pagamentos', {
//     title: 'Express'
//   })
// });


module.exports = router;