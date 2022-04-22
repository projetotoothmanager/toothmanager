module.exports = class prontuario_controller {

    static prontuario(req, res, next) {
        res.render('lista_prontuario')
    };

    static detalhes_prontuario(req, res, next) {
        res.render('detalhes_prontuario')
    };

    static criar_prontuario(req, res, next) {

        res.render('criar_prontuario')

    };

};