//!  Temos que importa o banco de dados para aqui MODELS


module.exports = class mainController {
    static async showHome(req, res, next) {
        res.render('/login')
    }
}