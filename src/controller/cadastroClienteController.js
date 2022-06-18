const cadastroCliente = require('../models/cadastroCliente')

//*Controller
module.exports = class cadastroClienteController {

    static cadastroCliente(req, res, next) {
        res.render('./cadastro')
    };

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

        console.log(dataNacimento)
        // conferimos se o usuario digito o nome e sobrenome
        if (nome.split(" ").length <= 1) {

            req.flash('message', 'Favor digitar o nome completo')
            res.render('./cadastro')
            return
        };

        // Retiramos todos os caracteres especial
        let cpfAnalise = cpf.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "");

        if (cpfAnalise.split("").length < 11) {
            req.flash('message', 'Cpf esta com numero de caracteres menor')
            res.render('./cadastro')
            return
        } else if (cpfAnalise.split("").length > 11) {
            req.flash('message', 'Cpf esta com numero de caracteres maior')
            res.render('./cadastro')
            return
        };

        const validadorBancoUsuario = await cadastroCliente.findOne({
            where: {
                cpf: cpfAnalise
            }
        });

        // conferindo se o usuario nao esta cadastrado
        if (validadorBancoUsuario) {
            req.flash('message', 'O usuario ja esta cadastro')
            res.render('./cadastro')
            return
        };



        //Verificando o celular
        let celularVerificador = celular.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('')

        if (celularVerificador.length > 12) {
            console.log('erro')
            req.flash('message', 'O numero do telefone digitado esta incorreto, maior que 12 digitos')
            res.render('./cadastro')
            return
        } else if (celularVerificador.length < 12) {
            req.flash('message', 'O numero telefone digitado esta incorreto, menor que 12 digitos')
            res.render('./cadastro')
            return

        };

        let regexNumero = /^(\d)+$/
        if (!regexNumero.test(numero)) {
            req.flash('message', 'Ola no campo numero nao pode ter letras, qualquer outro dado no complemento!')
            res.render('./cadastro')
            return
        };


        let cepDatabase = cep.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "")

        let regxCep = cep.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('').length

        if (regxCep > 8) {
            req.flash('message', 'Ola o CEP esta com numero a mais!')
            res.render('./cadastro')
            return
        } else if (regxCep < 8) {
            req.flash('message', 'Ola o CEP esta faltando numero!')
            res.render('./cadastro')
            return
        };

        //montamos os dados que sera enviado para o banco de dados

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

        // criação de dados no banco de dados
        try {
            const createdUser = await cadastroCliente.create(dados)
            req.flash('message', "Cadastro realizado com sucesso!")
            res.render('./cadastro')

        } catch (err) {
            console.error("cadastro:", err)
        };

    };


};