const {
    DataTypes
} = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas
const db = require('../db/conn') // conexao com o banco de dados


//* puxar o usuario
const User = require('./User')


// toothmanager => Nome de banco de dados
const toothmanager = db.define('toothmanager', {

})

module.exports = toothmanager // expostamos a configuração