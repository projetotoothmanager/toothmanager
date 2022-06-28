const prontuario = require('../models/prontuario')

module.exports = class ProntuarioController {

    static async prontuario(req, res, next) {
        const prontuarios = await prontuario.findAll({
            raw: true
        });

        res.render('./prontuarios', {
            prontuarios
        });
    };

    static async detalhesProntuario(req, res, next) {

        const id = req.params.id;
        console.log(id);

        const prontuarios = await prontuario.findOne({
            where: {
                id: id
            },
            raw: true
        });
        console.log(prontuarios)

        res.render('./detalhesProntuario', {
            prontuarios
        })
    };

    static addProntuario(req, res, next) {
        res.render('./criarProntuario');
    };

    static async save(req, res, next) {

        const {
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
        }
        const regexDentista = /^[\D\s]+$/
        if (!regexDentista.test(dentista)) {
            req.flash('message', 'No campo Dentista so pode utiliza letras!')
            res.render('./prontuarios')
            return
        }

        const dados = {
            nome,
            time,
            atendimento,
            dentista,
            tratamento,
            extração,
            limpeza,
        }

        try {
            await prontuario.create(dados);
            req.flash('message', "Prontuario cadastrado com sucesso!");
            res.redirect('/prontuarios');

        } catch (err) {
            console.error("prontuario banco de dados:", err);
        }
    }

    static async remove(req, res) {
        const id = req.params.id
        await prontuario.destroy({
            where: {
                id: id
            }
        });
        res.redirect('/prontuarios');
    }
    static async update(req, res) {
        const id = req.params.id

        const prontuarios = await prontuario.findOne({
            where: {
                id: id
            },
            raw: true
        });

        res.render('editProntuarios', {
            prontuarios
        });
    }

    static async updateSave(req, res) {

        const id = req.body.id
        const prontuarios = {
            nome,
            time,
            atendimento,
            dentista,
            tratamento,
            extração,
            limpeza,
        } = req.body

        try {
            await prontuario.update(prontuarios, {
                where: {
                    id: id
                }
            });

            req.flash('message', 'Prontuário atualizado com sucesso!')
            res.redirect('/prontuarios')
        } catch (error) {
            console.log(error);
        }
    }
}