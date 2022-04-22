const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('Cliente', {
    nomeCompleto: {
        type: DataTypes.STRING,
        required: true
    },
    cpf: {
        type: DataTypes.NUMBER,
        required: true
    },
    sexo: {
        type:DataTypes.STRING,
        required: true
    },
    celular: {
        type: DataTypes.NUMBER,
        required: true
    },
    email: {
        type: DataTypes.STRING
    },
    dataNascimento: {
        type: DataTypes.NUMBER,
        required: true
    }
})

module.exports = Cliente

