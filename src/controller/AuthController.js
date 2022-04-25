const bcrypt = require('bcryptjs') // puxamos os dados da biblioteca que encripita e desencript a senha do usuario
const User = require('../models/user') // puxamos os dados do banco do User, onde quardamos os dados dos usuario de login

//*Controller
module.exports = class AuthController {
    static login(req, res, next) {
        res.render('auth/login')
    };

    static async loginPost(req, res, next) {
        const { email, password } = req.body
        //procura o user
        const user = await User.findOne({ where: { email: email } });

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
        //se validou Email e senha, inicia session!
        req.session.userid = user.id

        req.flash('message', 'Autenticação realizada com sucesso!!')

        //save session
        req.session.save(() => {
            //redirect to agendamento
            res.redirect('/agendamento')
        })

    };

    //registrar
    static registrar(req, res) {
        res.render('auth/registrar')
    }

    static async registrarPost(req, res) {
        const { name, email, password, confirmpassword } = req.body

        if (password != confirmpassword) {
            req.flash('message', 'as senhas não conferem!')
            res.render('auth/registrar')

            return
        }

        //check se user existe
        const checkIfUserExists = await User.findOne({ where: { email: email } })

        if (checkIfUserExists) {
            req.flash('message', 'O e-mail já está cadastrado')
            res.render('auth/registrar')
        }
        //criar senha com bcrypt
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try {
            const createdUser = await User.create(user)
            //inicializar sessao
            req.session.userid = createdUser.id

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