const {
    DataTypes
} = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas


const db = require('../db/conn') // conexao com o banco de dados

const prontuario = db.define('prontuario', {
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    time: {
        type: DataTypes.STRING,
        require: true
    },
    atendimento: {
        type: DataTypes.STRING,
        require: true
    },
    dentista: {
        type: DataTypes.STRING,
        require: true
    },
    tratamento: {
        type: DataTypes.STRING,
        require: false
    },
    extração: {
        type: DataTypes.STRING,
        require: false
    },
    limpeza: {
        type: DataTypes.STRING,
        require: false
    }
})




module.exports = prontuario;