const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                require: true,
            },
            email: {
                type: DataTypes.STRING,
                require: true
            },
            password: {
                type: DataTypes.STRING,
                require: true
            }

        }, {

            sequelize
        })
    }
}

module.exports = User;