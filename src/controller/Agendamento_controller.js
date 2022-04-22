const Agenda = require('../models/Agenda') //Conexão com o banco
module.exports = class Agendamento_Controller {

    static agendamento(req, res, next) {
        res.render('agendamento')
    }
}