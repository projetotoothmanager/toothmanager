const {
    DataTypes
} = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas

const db = require('../db/conn') // conexao com o banco de dados

const agendamento = db.define('agendamento', {
    hora: {
        type: DataTypes.STRING,
        require: true
    },
    data: {
        type: DataTypes.STRING,
        require: true
    },
    nome: {
        type: DataTypes.STRING,
        require: true
    }
})




module.exports = agendamento;