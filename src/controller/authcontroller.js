const bcrypt = require('bcrypt') // puxamos os dados da biblioteca que encripita e desencript a senha do usuario

//aqui seiria o banco de dados ++++
//const User = require('models/User') // puxamos os dados do banco do User, onde quardamos os dados dos usuario de login

module.exports = class AuthController {

    static login(req, res, next) {
        res.render('auth/login')
    }

    static register(req, res, next) {
        res.render('auth/register')
    }

    static async registerpost(req, res, next) {

        const {
            name,
            email,
            senha,
            confirmSenha
        } = req.body

        //validação senha do usuario
        const regex_senha = /^(?=.*[A-Z]).{6,20}$/gm
        if (regex_senha.test(senha) == false) { // se a senha tem mais de 6 e menos de 20 caratceres
            req.flash('message', 'Sua senha deve conter de 6 a 20 caracteres')
            res.render('auth/register')
            return
        };

        const salt = bcrypt.genSaltSync(10) //Criptografia senha
        const dificult_senha = bcrypt.hashSync(senha, salt) // junção das senhas

        if (senha !== confirmSenha) { // se as senhas sao identicas
            req.flash('message', 'As senha nao sao identicas, favor conferir e tentar novamente.');
            res.render('auth/register')
            return

        };
        name.split(' ')
        if (name.length <= 1) { // conferimos se o usuario digita mais de um nome
            req.flash('message', 'Favor digitar o nome completo')
            res.render('auth/register')
            return
        };

        //!alterar quando ativar o banco
        const chek_email = await User.findOne({ // validamos se o email nao esta cadastrado
            where: {
                email: email
            }
        });
        if (chek_email) {
            req.flash('message', 'O e-mail ja esta cadastrado')
            res.render('auth/register')
            return
        };

        const regexp = /\S+@\w+\.\w{2,6}(\.\w{2})?/g
        if ((regexp.test(email)) != true) {
            req.flash('message', 'O seu email nao esta no formato correto')
            res.render('auth/register')
            return
        };

        const user = { // montamos os dados que sera enviado para o banco de dados
            name,
            email,
            senha: dificult_senha
        }

        //!Alterar pois ainda nao estamos no banco
        //! temos que ativar o json para rodar
        try { // rastreador de erros
            const createdUser = await User.create(user) // criação de dados no banco de dados

            //* inicializar session
            req.session.userid = user.id

            req.flash('message', "Cadastro realizado com sucesso!")

            req.session.save(() => { //salvamos os dados da session antes de redirect
                res.redirect('/')
            })

        } catch (err) {
            console.error('err# % d ', err)
        }
    }

}