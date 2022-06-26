const { Sequelize } = require('sequelize'); 
const dbConfig = require('../config/database');
require('dotenv').config()

const agendamento = require('../models/agendamento')
const cadastroCliente = require('../models/cadastroCliente')
const user = require('../models/user')
const prontuario = require('../models/prontuario')

const sequelize = new Sequelize(dbConfig);

agendamento.init(sequelize);
cadastroCliente.init(sequelize);
user.init(sequelize);
prontuario.init(sequelize);

try {
    sequelize.authenticate();
    console.log("Autenticação feita com sucesso!");

} catch (err) {
    console.log("Não foi possível realizar conexão!" + err.message);
};

module.exports = sequelize