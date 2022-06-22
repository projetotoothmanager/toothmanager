const agendamento = require("../models/agendamento");

//*Controller
module.exports = class agendamentoController {

    static async agendamento(req, res, next) {

        const agendamentos = await agendamento.findAll({
            raw: true
        })
        console.log(agendamentos)
        res.render('./agendamento', {
            agendamentos
        })

    };

    static async agendamentoSave(req, res, next) {
        const {
            hora,
            data,
            nome

        } = req.body

        const regexNome = /^[\D\s]+$/
        if (nome.split(" ").length <= 1) {
            req.flash('message', 'Favor digitar o nome completo')
            res.redirect('./agendamento')
            return
        } else if (!regexNome.test(nome)) {
            req.flash('message', 'So pode utiliza letras!')
            res.redirect('./agendamento')
            return
        };

        let dataUs = data.split("-")
        let dataBr = `${dataUs[2]}/${dataUs[1]}/${dataUs[0]}`
        let validadorData = /(0[1-9]|[12][0-9]|3[01])\/?(0[1-9]|1[012])\/?(19|20)\d{2}/g
        if (!validadorData.test(dataBr)) {
            req.flash('message', 'Data fora do padrão')
            res.redirect('./agendamento')
            return
        };


        let dataAtual = new Date();
        let day1 = new Date(data);
        let day2 = new Date(dataAtual);
        let difference = (day2 - day1);
        let days = parseInt(difference / -(3600 * 1000 * 24));

        if (days < 0) {
            req.flash('message', 'Data desejada ja passou!')
            res.redirect('./agendamento')
            return
        }

        const dados = {
            nome,
            data,
            hora
        };


        // criação de dados no banco de dados
        try {
            const createdUser = await agendamento.create(dados)
            req.flash('message', "Agendamento realizado com sucesso!")
            res.redirect('./agendamento')

        } catch (err) {
            console.error("Cadastro:", err)
        };

    };

    static async agendamentoRemove(req, res) {

        const id = req.params.id

        console.log(id)

        await agendamento.destroy({
            where: {
                id: id
            }
        })

        res.redirect('/agendamento')
    }

    static async agendamentoUpdate(req, res) {

        const id = req.params.id

        const agenda = await agendamento.findOne({
            where: {
                id: id
            },
            raw: true
        })

        res.render('./agendamento/edit', {
            agenda
        })

    }

    static async agendamentoUpdateSave(req, res) {

        const id = req.body.id

        const agenda = {
            hora: req.body.hora,
            data: req.body.data,
            nome: req.nome.nome
        }

        try {

            await agendamento.update(agenda, {
                where: {
                    id: id
                }
            })

            req.flash('message', 'Agendamento atualizado com sucesso!')

            res.redirect('./agendamento')

        } catch (error) {

            console.log(error)

        }
    }
};