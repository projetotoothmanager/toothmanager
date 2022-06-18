const {
    Sequelize
} = require('sequelize'); // puxamos a importação  do banco de dados
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
    sequelize.authenticate()
    console.log("Authenticated  sucess")

} catch (err) {
    console.log("nao foi possivel Autenticar" + err.message)
};

module.exports = sequelize