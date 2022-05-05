const { DataTypes } = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas
const Cliente = require('../models/cadastro_cliente')

const db = require('../db/conn') // conexao com o banco de dados

const agendamento = db.define('agendamento', {
    hora: {
        type: DataTypes.TIME,
        require: true
    },
    data: {
        type: DataTypes.DATE,
        require: true
    },
    nome: {
        type: DataTypes.STRING,
        require: true
    }
})

agendamento.belongsTo(Cliente, {
    constraints: true,
    foreignKey: 'idCliente'
})

Cliente.hasMany(agendamento, {
    foreignKey: 'idCliente'
})






module.exports = agendamento;