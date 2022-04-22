const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Consulta = db.define('Consulta', {
    dataAgendamento: {
        type: DataTypes.DATE,
        required: true
    },
    horario: {
        type: DataTypes.TIME,
        required: true
    },
    dataProcedimento: {
        type: DataTypes.DATE,
        required: true
    },
    descricao: {
        type: DataTypes.STRING
    }
})

module.exports = Consulta