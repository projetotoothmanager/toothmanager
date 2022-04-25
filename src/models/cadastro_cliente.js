const {
    DataTypes
} = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas

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
    Data_Nacimento: {
        type: DataTypes.STRING,
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
    completo: {
        type: DataTypes.STRING,
        require: true
    },
    numero: {
        type: DataTypes.STRING,
        require: true
    },
    Cidade: {
        type: DataTypes.STRING,
        require: true
    },
    Estado: {
        type: DataTypes.STRING,
        require: true
    },
    cep: {
        type: DataTypes.STRING,
        require: true
    }
})




module.exports = cadastroCliente;