//!  Temos que importa o banco de dados para aqui MODELS

//*Controller
module.exports = class index_controller {
    static async show_home(req, res, next) {
        res.render('auth/login')
    };
};