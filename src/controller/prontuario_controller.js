const prontuario = require('../models/prontuario')


module.exports = class prontuario_Controller {

    static async prontuario(req, res, next) {

        const prontuarios = await prontuario.findAll({
            raw: true
        })

        res.render('./prontuario', { prontuarios })
    };

    static detalhes_prontuario(req, res, next) {
        res.render('detalhes_prontuario')
    };

    static addprontuario(req, res, next) {
        res.render('./criar_prontuario')
    };

    static async prontuario_save (req, res, next) {

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
            res.render('./prontuario')
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
            await prontuario.create(dados)
            req.flash('message', "Prontuario cadastrado com sucesso!")
            res.render('./criar_prontuario')

        } catch (err) {
            console.error("prontuario banco de dados:", err)
        };


    };

};