const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = class AuthController {
    static login(req, res, next) {
        res.render('auth/login');
    };

    static async loginPost(req, res, next) {
        const {
            email,
            password
        } = req.body

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            req.flash('message', 'O Usuário não econtrado!!');
            res.render('auth/login');
            return
        };

        const hashpassword = bcrypt.compareSync(password, user.password);
        if (!hashpassword) {
            req.flash('message', 'A senha esta incorreta');
            res.render('auth/login');
            return
        };

        try {
            req.session.userid = user.id
            req.flash('message', "login realizado com sucesso!")
            req.session.save(() => {
                res.redirect('/agendamentos');
            })
        } catch (err) {
            console.error('Erro de salva session ', err);
        }
    }

    static registrar(req, res) {
        res.render('auth/registrar');
    }

    static async registrarPost(req, res) {
        const {
            name,
            email,
            password,
            confirmpassword
        } = req.body

        if (password != confirmpassword) {
            req.flash('message', 'as senhas não conferem!');
            res.render('auth/registrar');
            return
        }

        const checkUserExists = await User.findOne({
            where: {
                email: email
            }
        })

        if (checkUserExists) {
            req.flash('message', 'O e-mail já está cadastrado');
            res.render('auth/registrar');
            return
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const dados = {
            name,
            email,
            password: hashedPassword
        }

        try {
            const createdUser = await User.create(dados);
            req.session.userid = createdUser.id
            req.flash('message', 'Conta criada com Sucesso!! :)');
            req.session.save(() => {
                res.redirect('/agendamentos')
            })
        } catch (err) {
            console.log(err);
        }
    }

    static logout(req, res, next) {

        req.session.destroy();
        res.redirect('/login');
    };
};