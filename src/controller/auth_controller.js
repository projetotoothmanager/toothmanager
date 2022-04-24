const bcrypt = require('bcrypt') // puxamos os dados da biblioteca que encripita e desencript a senha do usuario
const user = require('../models/user') // puxamos os dados do banco do User, onde quardamos os dados dos usuario de login

//*Controller
module.exports = class auth_controller {
    static login(req, res, next) {
        res.render('auth/login')
    };

    static async loginpost(req, res, next) {
        const {
            email,
            senha
        } = req.body

        console.log(email)

        const validador_banco = await user.findOne({
            where: {
                email: email
            }
        });

        //conferindo se o email esta cadastrado
        if (!validador_banco) {
            req.flash('messages', 'O E-mail não esta cadastrado'); //! alterar
            res.render('auth/login')
            return
        };

        //! tera que ser revisto
        // se a senha esta correta
        /// const senha_verifica = bcrypt.compareSync(senha, validador_banco.senha)


        if (validador_banco.senha != senha) {
            req.flash('messages', 'A senha esta incorreta');
            res.render('auth/login')
            return
        };

        //* inicializar session login
        try {
            req.session.userid = validador_banco.id
            req.flash('message', "login realizado com sucesso!")
            req.session.save(() => { //salvamos os dados da session antes de redirect
                res.redirect('/agendamento')
            })
        } catch (err) {
            console.error('Erro de salva session ', err)
        }
    };


    //* Função de logout
    static logout(req, res, next) {

        req.session.destroy() // apagamos a ssesion dele dentro do navegador.
        res.redirect('/login')
    };


};