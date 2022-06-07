'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cadastroClientes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      cpf: {
        type: Sequelize.CHAR(11),
        require: true,
        allowNull: false
      },
      sexo: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      e_mail: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      data_Nacimento: {
        type: Sequelize.DATEONLY,
        require: true,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cadastroClientes');
  }
};