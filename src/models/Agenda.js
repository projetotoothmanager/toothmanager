const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Agenda = db.define('Agenda', {
    data: {
        type: DataTypes.DATE,
        required: true
    },
    horario: {
        type: DataTypes.TIME,
        required: true
    },
    //Precisa colocar a FK de acordo com o diagrama do banco
})

module.exports = Agenda




//Dados
//Id PK
//data
//horario
//id consulta FK