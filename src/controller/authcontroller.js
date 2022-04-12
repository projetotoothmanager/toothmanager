const bcrypt = require('bcrypt') // puxamos os dados da biblioteca que encripita e desencript a senha do usuario
const User = require('../models/User') // puxamos os dados do banco do User, onde quardamos os dados dos usuario de login

//*Controller
module.exports = class AuthController {
    static login(req, res, next) {
        res.render('auth/login')
    }

    static async loginpost(req, res, next) {
        const {
            email,
            senha
        } = req.body

        console.log(email)

        const validador_banco = await User.findOne({
            where: {
                email: email
            }
        })

        //conferindo se o email esta cadastrado
        if (!validador_banco) {
            req.flash('messages', 'O E-mail não esta cadastrado'); //! alterar
            res.render('auth/login')
            return
        }

        //! tera que ser revisto
        // se a senha esta correta
        /// const senha_verifica = bcrypt.compareSync(senha, validador_banco.senha)


        if (validador_banco.senha != senha) {
            req.flash('messages', 'A senha esta incorreta');
            res.render('auth/login')
            return
        }

        //* inicializar session login
        req.session.userid = validador_banco.id
        req.flash('message', "login realizado com sucesso!")
        req.session.save(() => { //salvamos os dados da session antes de redirect
            res.redirect('/agendamento')
        })
    }


    //* Função de logout
    static logout(req, res, next) {

        req.session.destroy() // apagamos a ssesion dele dentro do navegador.
        res.redirect('/login')
    }

}