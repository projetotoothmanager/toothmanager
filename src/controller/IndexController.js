//!  Temos que importa o banco de dados para aqui MODELS

//*Controller
module.exports = class indexController {
    static async showHome(req, res, next) {
        res.render('auth/login')
    };
};