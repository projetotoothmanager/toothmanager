//*Controller
module.exports = class cadastro_cliente_Controller {

    static cadastro_cliente(req, res, next) {
        res.render('cadastro')
    }


    static async cadastro_cliente_post(req, res, next) {
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
            Cep

        } = req.body
        // Retiramos todos os caracteres especial
        cpf = cpf.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "");
        const validador_banco_usuario = await User.findOne({
            where: {
                cpf: cpf
            }
        });
        // conferimos se o usuario digito o nome e sobrenome
        nome.split(' ')
        if (nome.length <= 1) {
            req.flash('message', 'Favor digitar o nome completo')
            res.render('./cadastro')
            return
        };
        // conferindo se o usuario nao esta cadastrado
        if (validador_banco_usuario) {
            req.flash('message', 'O usuario ja esta cadastro')
            res.render('./Agendamento_router')
            return
        };
        //conferindo data de nacimento
        let validador_nac = /(0[1-9]|[12][0-9]|3[01])\/?(0[1-9]|1[012])\/?(19|20)\d{2}/g
        if (!validador_nac.test(Data_Nacimento)) {
            req.flash('message', 'Data nacimento fora do padrão')
            res.render('./cadastro')
            return
        };
        //Verificando o celular
        let celular_verificador = celular.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "").split('')

        if (celular_verificador.length > 12) {
            console.log('erro')
            req.flash('message', 'O numero digitado esta incorreto, maior que 12 digitos')
            res.render('./cadastro')
            return
        } else if (celular_verificador.length < 12) {
            req.flash('message', 'O numero digitado esta incorreto, menor que 12 digitos')
            res.render('./cadastro')
            return

        }
        let reg = /^(\d)+$/
        if (!reg.test(numero_teste)) {
            req.flash('message', 'Ola no campo numero nao pode ter letras, qualquer outro dado no complemento!')
            res.render('./cadastro')
            return
        }
        // montamos os dados que sera enviado para o banco de dados
        const user = {
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
            Cep
        }
        // criação de dados no banco de dados
        try {
            const createdUser = await User.create(user)
            req.flash('message', "Cadastro realizado com sucesso!")
            res.redirect('./Agendamento_router')
        } catch (err) {
            console.error("Cadastro:", err)
        }

    }
}