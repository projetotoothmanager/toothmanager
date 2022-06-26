const {
    Model,
    DataTypes
} = require("sequelize");

class Agendamento extends Model {
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
module.exports = Agendamento;