const {
    Sequelize
} = require('sequelize'); // puxamos a importação  do banco de dados

const sequelize = new Sequelize("toothmanager", "root", '', { // criação  do banco de dados
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("Authenticated  sucess")

} catch (err) {
    console.log("nao foi possivel Authenticated" + err.message)
}

module.exports = sequelize