const prontuario = require('../models/prontuario')


module.exports = class prontuarioController {

    static async prontuario(req, res, next) {

        const prontuarios = await prontuario.findAll({
            raw: true
        })
        console.log(prontuarios)
        res.render('./prontuario', {
            prontuarios
        })
    };

    static detalhesProntuario(req, res, next) {
        res.render('detalhesProntuario')
    };

    static addprontuario(req, res, next) {
        res.render('./criarProntuario')
    };

    static async prontuarioSave(req, res, next) {

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

        const regexNome = /^[\D\s]+$/
        if (nome.split(" ").length <= 1) {
            req.flash('message', 'Favor digitar o nome completo')
            res.render('./criarProntuario')
            return
        } else if (!regexNome.test(nome)) {
            req.flash('message', 'So pode utiliza letras!')
            res.render('./criarProntuario')
            return
        };
        const regexDentista = /^[\D\s]+$/
        if (!regexDentista.test(dentista)) {
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
            res.render('./criarProntuario')

        } catch (err) {
            console.error("prontuario banco de dados:", err)
        };


    };

};