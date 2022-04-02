const bcrypt = require('bcrypt') // puxamos os dados da biblioteca que encripita e desencript a senha do usuario

//aqui seiria o banco de dados ++++
//const User = require('models/User') // puxamos os dados do banco do User, onde quardamos os dados dos usuario de login

module.exports = class authController {

    static login(req, res) {
        res.render('auth/login')
    }

    static register(req, res) {
        res.render('auth/register')
    }

    // criar a autenticação

}