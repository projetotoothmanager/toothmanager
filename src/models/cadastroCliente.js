const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")


class cadastroCliente extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                require: true
            },
            cpf: {
                type: DataTypes.CHAR(11),
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
            eMail: {
                type: DataTypes.STRING,
                require: true
            },
            dataNacimento: {
                type: DataTypes.DATEONLY,
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

        }, {

            sequelize
        })
    }

}
module.exports = cadastroCliente