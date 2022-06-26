const {
    Model,
    DataTypes
} = require("sequelize");

class Prontuario extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                require: true
            },
            time: {
                type: DataTypes.STRING,
                require: true
            },
            atendimento: {
                type: DataTypes.STRING,
                require: true
            },
            dentista: {
                type: DataTypes.STRING,
                require: true
            },
            tratamento: {
                type: DataTypes.STRING,
                require: false
            },
            extração: {
                type: DataTypes.STRING,
                require: false
            },
            limpeza: {
                type: DataTypes.STRING,
                require: false
            }
        }, {
            sequelize
        })
    }
}
module.exports = Prontuario;