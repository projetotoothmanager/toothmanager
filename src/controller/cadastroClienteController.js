const cadastroCliente = require('../models/cadastroCliente')

//*Controller
module.exports = class cadastroClienteController {

    static cadastroCliente(req, res, next) {
        res.render('cadastro')
    };

    static async cadastroClientePost(req, res, next) {
        const {
            nome,
            cpf,
            sexo,
            celular,
            e_mail,
            Data_Nacimento,
            rua,
            bairro,
            completo,
            numero,
            Cidade,
            Estado,
            cep
        } = req.body

        // conferimos se o usuario digito o nome e sobrenome
        if (nome.split(" ").length <= 1) {

            req.flash('message', 'Favor digitar o nome completo')
            res.render('./cadastro')
            return
        };

        // Retiramos todos os caracteres especial
        let cpf_analise = cpf.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "");

        if (cpf_analise.split("").length < 11) {
            req.flash('message', 'Cpf esta com numero de caracteres menor')
            res.render('./cadastro')
            return
        } else if (cpf_analise.split("").length > 11) {
            req.flash('message', 'Cpf esta com numero de caracteres maior')
            res.render('./cadastro')
            return
        };

        const validador_banco_usuario = await cadastro_cliente.findOne({
            where: {
                cpf: cpf_analise
            }
        });

        // conferindo se o usuario nao esta cadastrado
        if (validador_banco_usuario) {
            req.flash('message', 'O usuario ja esta cadastro')
            res.render('./cadastro')
            return
        };

        let data_us = Data_Nacimento.split("-")
        let data_br = `${data_us[2]}/${data_us[1]}/${data_us[0]}`
        let validador_nac = /(0[1-9]|[12][0-9]|3[01])\/?(0[1-9]|1[012])\/?(19|20)\d{2}/g
        if (!validador_nac.test(data_br)) {
            req.flash('message', 'Data nacimento fora do padrão')
            res.render('./cadastro')
            return
        };

        //Verificando o celular
        let celular_verificador = celular.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('')

        if (celular_verificador.length > 12) {
            console.log('erro')
            req.flash('message', 'O numero do telefone digitado esta incorreto, maior que 12 digitos')
            res.render('./cadastro')
            return
        } else if (celular_verificador.length < 12) {
            req.flash('message', 'O numero telefone digitado esta incorreto, menor que 12 digitos')
            res.render('./cadastro')
            return

        };

        let regex_numero = /^(\d)+$/
        if (!regex_numero.test(numero)) {
            req.flash('message', 'Ola no campo numero nao pode ter letras, qualquer outro dado no complemento!')
            res.render('./cadastro')
            return
        };


        let cep_database = cep.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "")

        let regx_cep = cep.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('').length

        if (regx_cep > 8) {
            req.flash('message', 'Ola o CEP esta com numero a mais!')
            res.render('./cadastro')
            return
        } else if (regx_cep < 8) {
            req.flash('message', 'Ola o CEP esta faltando numero!')
            res.render('./cadastro')
            return
        };

        //montamos os dados que sera enviado para o banco de dados

        const dados = {
            nome,
            cpf: cpf_analise,
            sexo,
            celular,
            e_mail,
            Data_Nacimento: data_br,
            rua,
            bairro,
            completo,
            numero,
            Cidade,
            Estado,
            cep: cep_database
        };

        // criação de dados no banco de dados
        try {
            const createdUser = await cadastro_cliente.create(dados)
            req.flash('message', "Cadastro realizado com sucesso!")
            res.render('./cadastro')

        } catch (err) {
            console.error("Cadastro:", err)
        };

    };


};