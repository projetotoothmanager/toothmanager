const agendamento = require("../models/agendamento");

module.exports = class AgendamentoController {

    static async agendamento(req, res, next) {

        const agendamentos = await agendamento.findAll({
            raw: true
        })

        res.render('./agendamentos', {agendamentos})
    }

    static async save(req, res, next) {

        const {
            hora,
            data,
            nome

        } = req.body

        const regexNome = /^[\D\s]+$/
        if (nome.split(" ").length <= 1) {
            req.flash('message', 'Favor digitar o nome completo');
            res.redirect('./agendamentos');
            return
        } else if (!regexNome.test(nome)) {
            req.flash('message', 'Só pode utilizar letras!');
            res.redirect('./agendamentos');
            return
        }

        let dataUs = data.split("-")
        let dataBr = `${dataUs[2]}/${dataUs[1]}/${dataUs[0]}`
        let validadorData = /(0[1-9]|[12][0-9]|3[01])\/?(0[1-9]|1[012])\/?(19|20)\d{2}/g
        if (!validadorData.test(dataBr)) {
            req.flash('message', 'Data fora do padrão');
            res.redirect('./agendamentos');
            return
        }

        let dataAtual = new Date();
        let day1 = new Date(data);
        let day2 = new Date(dataAtual);
        let difference = (day2 - day1);
        let days = parseInt(difference / -(3600 * 1000 * 24));

        if (days < 0) {
            req.flash('message', 'Data desejada já passou!');
            res.redirect('./agendamentos')
            return
        }

        const dados = {
            nome,
            data,
            hora
        }

        try {
            const createdUser = await agendamento.create(dados);
            req.flash('message', "Agendamento realizado com sucesso!");
            res.redirect('./agendamentos');
        } catch (err) {
            console.error("Cadastro:", err);
        }
    }

    static async remove(req, res) {
        const id = req.params.id
        await agendamento.destroy({
            where: {id: id}});
        res.redirect('/agendamentos');
    }

    static async update(req, res) {

        const id = req.params.id
        const agenda = await agendamento.findOne({
            where: {id: id}, raw: true});
        res.render('editAgendamento', {agenda});
   }
    static async updateSave(req, res) {
        const id = req.body.id
        const agenda = {
            nome,
            data,
            hora
        } = req.body

        try {
            await agendamento.update(agenda, {where: {id: id}});
            req.flash('message', 'Agendamento atualizado com sucesso!');
            req.session.save(() => {
                res.redirect('/agendamentos');
            })
         } catch (error) {
            console.log(error);
        }
    }
}