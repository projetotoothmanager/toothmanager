//!  Temos que importa o banco de dados para aqui MODELS

//*Controller
module.exports = class Index_controller {
    static async show_Home(req, res, next) {
        res.render('auth/login')
    }
}