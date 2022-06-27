const cadastroCliente = require('../models/cadastroCliente');

module.exports = class CadastroClienteController {

    static cadastroCliente(req, res, next) {
        res.render('./cadastro');
    };

    static async show(req, res){

        const pacientes = await cadastroCliente.findAll({raw: true});

        res.render('listaPacientes', {pacientes});
    }

    static async cadastroSave(req, res, next) {
        const {
            nome,
            cpf,
            sexo,
            celular,
            eMail,
            dataNacimento,
            rua,
            bairro,
            complemento,
            numero,
            cidade,
            estado,
            cep
        } = req.body

        if (nome.split(" ").length <= 1) {
            req.flash('message', 'Favor digitar o nome completo');
            res.render('./cadastro');
            return
        };

        let cpfAnalise = cpf.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "");
        if (cpfAnalise.split("").length < 11) {
            req.flash('message', 'CPF menor que 11 dígitos!');
            res.render('./cadastro');
            return
        } else if (cpfAnalise.split("").length > 11) {
            req.flash('message', 'CPF maior que 11 dígitos!');
            res.render('./cadastro');
            return
        };

        const validadorBancoUsuario = await cadastroCliente.findOne({
            where: {
                cpf: cpfAnalise
            }
        });

        if (validadorBancoUsuario) {
            req.flash('message', 'Usuário já cadastrado no sistema!');
            res.render('./cadastro');
            return
        };

        let celularVerificador = celular.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('');
        if (celularVerificador.length > 12) {
            console.log('erro');
            req.flash('message', 'Número de telefone inválido! Deve conter 12 dígitos!');
            res.render('./cadastro');
            return

        } else if (celularVerificador.length < 12) {
            req.flash('message', 'O número de telefone inválido! Deve conter 12 dígitos!');
            res.render('./cadastro');
            return
        };

        let cepDatabase = cep.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "");
        let regxCep = cep.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('').length
        if (regxCep > 8) {
            req.flash('message', 'CEP maior que 8 dígitos! Deve conter 8 dígitos!');
            res.render('./cadastro');
            return
        } else if (regxCep < 8) {
            req.flash('message', 'CEP menor que 8 dígitos! Deve conter 8 dígitos!');
            res.render('./cadastro');
            return
        };

        const dados = {
            nome,
            cpf: cpfAnalise,
            sexo,
            celular,
            eMail,
            dataNacimento,
            rua,
            bairro,
            complemento,
            numero,
            cidade,
            estado,
            cep: cepDatabase
        };

        try {
            const createdUser = await cadastroCliente.create(dados);
            req.flash('message', "Cadastro realizado com sucesso!");
            res.render('./cadastro');
        } catch (err) {

            console.error("cadastro:", err);
        }
    }
}