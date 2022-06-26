const { Model, DataTypes } = require("sequelize");

class agendamento extends Model {
    static init(sequelize) {
        super.init({
            hora: {
                type: DataTypes.TIME,
                require: true
            },
            data: {
                type: DataTypes.DATEONLY,
                require: true
            },
            nome: {
                type: DataTypes.STRING,
                require: true
            },
        }, {

            sequelize

        });
    }
}
module.exports = agendamento;

// agendamento.belongsTo(Cliente, {
//     constraints: true,
//     foreignKey: 'idCliente'
// })

// Cliente.hasMany(agendamento, {
//     foreignKey: 'idCliente'
// })