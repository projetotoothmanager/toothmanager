const { DataTypes } = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas

const db = require('../db/conn') // conexao com o banco de dados

const cadastroCliente = db.define('cadastro_cliente', {
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    cpf: {
        type: DataTypes.STRING,
        require: true
    },
    sexo: {
        type: DataTypes.STRING,
        require: true
    },
    celular: {
        type: DataTypes.STRING,
        require: true
    },
    e_mail: {
        type: DataTypes.STRING,
        require: true
    },
    data_Nacimento: {
        type: DataTypes.DATE,
        require: true
    },
    rua: {
        type: DataTypes.STRING,
        require: true
    },
    bairro: {
        type: DataTypes.STRING,
        require: true
    },
    complemento: {
        type: DataTypes.STRING,
        require: true
    },
    numero: {
        type: DataTypes.STRING,
        require: true
    },
    cidade: {
        type: DataTypes.STRING,
        require: true
    },
    estado: {
        type: DataTypes.STRING,
        require: true
    },
    cep: {
        type: DataTypes.STRING,
        require: true
    }
})




module.exports = cadastroCliente;