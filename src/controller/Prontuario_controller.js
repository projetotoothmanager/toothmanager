module.exports = class Prontuario_controller {

    static prontuario(req, res, next) {
        res.render('listaProntuario')
    }

    static detalhesProntuario(req, res, next) {
        res.render('detalhesProntuario')
    }



}