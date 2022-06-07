const agendamento = require("../models/agendamento");

//*Controller
module.exports = class agendamento_controller {

    static async agendamento(req, res, next) {

        const agendamentos = await agendamento.findAll({
            raw: true
        })
        console.log(agendamentos)
        res.render('./agendamento', {
            agendamentos
        })

    };

    static async agendamento_save(req, res, next) {
        const {
            hora,
            data,
            nome

        } = req.body

        const regex_nome = /^[\D\s]+$/
        if (nome.split(" ").length <= 1) {
            req.flash('message', 'Favor digitar o nome completo')
            res.render('./agendamento')
            return
        } else if (!regex_nome.test(nome)) {
            req.flash('message', 'So pode utiliza letras!')
            res.render('./agendamento')
            return
        };

        let data_us = data.split("-")
        let data_br = `${data_us[2]}/${data_us[1]}/${data_us[0]}`
        let validador_data = /(0[1-9]|[12][0-9]|3[01])\/?(0[1-9]|1[012])\/?(19|20)\d{2}/g
        if (!validador_data.test(data_br)) {
            req.flash('message', 'Data fora do padrão')
            res.render('./agendamento')
            return
        };


        let data_atual = new Date();
        let day1 = new Date(data);
        let day2 = new Date(data_atual);
        let difference = (day2 - day1);
        let days = parseInt(difference / -(3600 * 1000 * 24));

        if (days < 0) {
            req.flash('message', 'Data desejada ja passou!')
            res.render('./agendamento')
            return
        }

        const dados = {
            nome,
            data,
            hora
        };


        // criação de dados no banco de dados
        try {
            const created_user = await agendamento.create(dados)
            req.flash('message', "Agendamento realizado com sucesso!")
            res.redirect('./agendamento')

        } catch (err) {
            console.error("Cadastro:", err)
        };

    };
};