const prontuario = require('../models/prontuario')


module.exports = class prontuario_controller {

    static prontuario(req, res, next) {
        res.render('lista_prontuario')
    };

    static detalhes_prontuario(req, res, next) {
        res.render('detalhes_prontuario')
    };

    static criar_prontuario(req, res, next) {
        res.render('./criar_prontuario')
    };

    static async form_prontuario(req, res, next) {

        const {
            // id
            nome,
            time,
            atendimento,
            dentista,
            tratamento,
            extração,
            limpeza,

        } = req.body

        const regex_nome = /^[\D\s]+$/
        if (nome.split(" ").length <= 1) {
            req.flash('message', 'Favor digitar o nome completo')
            res.render('./criar_prontuario')
            return
        } else if (!regex_nome.test(nome)) {
            req.flash('message', 'So pode utiliza letras!')
            res.render('./criar_prontuario')
            return
        };
        const regex_dentista = /^[\D\s]+$/
        if (!regex_dentista.test(dentista)) {
            req.flash('message', 'No campo Dentista so pode utiliza letras!')
            res.render('./criar_prontuario')
            return
        };

        const dados = {
            // id,
            nome,
            time,
            atendimento,
            dentista,
            tratamento,
            extração,
            limpeza,
        };
        // criação de dados no banco de dados
        try {
            const createdUser = await prontuario.create(dados)
            req.flash('message', "Prontuario cadastrado com sucesso!")
            res.render('./lista_prontuario')

        } catch (err) {
            console.error("prontuario banco de dados:", err)
        };


    };

};