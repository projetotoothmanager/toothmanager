const bcrypt = require('bcryptjs'); // puxamos os dados da biblioteca que encripita e desencript a senha do usuario
const User = require('../models/user'); // puxamos os dados do banco do User, onde quardamos os dados dos usuario de login

//*Controller
module.exports = class auth_controller {
    static login(req, res, next) {
        res.render('auth/login')
    };

    static async login_post(req, res, next) {
        const {
            email,
            password
        } = req.body

        //procura o user
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        //validando email do user
        if (!user) {
            req.flash('message', 'O Usuário não econtrado!!'); //! alterar
            res.render('auth/login')
            return
        };

        //check password
        const hashpassword = bcrypt.compareSync(password, user.password)

        if (!hashpassword) {
            req.flash('message', 'A senha esta incorreta');
            res.render('auth/login')
            return
        };
        //* inicializar session login
        try {
            req.session.userid = user.id
            req.flash('message', "login realizado com sucesso!")
            req.session.save(() => { //salvamos os dados da session antes de redirect
                res.redirect('/agendamento')
            })
        } catch (err) {
            console.error('Erro de salva session ', err)
        }
    }



    //registrar
    static registrar(req, res) {
        res.render('auth/registrar')
    }

    static async registrar_post(req, res) {
        const {
            name,
            email,
            password,
            confirmpassword
        } = req.body

        if (password != confirmpassword) {
            req.flash('message', 'as senhas não conferem!')
            res.render('auth/registrar')
            return
        }

        //check se user existe
        const checkIf_user_exists = await User.findOne({
            where: {
                email: email
            }
        })

        if (checkIf_user_exists) {
            req.flash('message', 'O e-mail já está cadastrado')
            res.render('auth/registrar')
            return
        }
        //criar senha com bcrypt
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const dados = {
            name,
            email,
            password: hashedPassword
        }

        try {
            const created_user = await User.create(dados)
            //inicializar sessao
            req.session.userid = created_user.id

            req.flash('message', 'Conta criada com Sucesso!! :)')

            //salvar sessao
            req.session.save(() => {
                res.redirect('/agendamento')

            })
        } catch (err) {
            console.log(err)
        }

    }

    //* Função de logout
    static logout(req, res, next) {

        req.session.destroy() // apagamos a ssesion dele dentro do navegador.
        res.redirect('/login')
    };


};