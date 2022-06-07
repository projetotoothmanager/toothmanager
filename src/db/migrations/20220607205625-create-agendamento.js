'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agendamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      hora: {
        type: Sequelize.TIME,
        require: true,
        allowNull: false
      },
      data: {
        type: Sequelize.DATEONLY,
        require: true,
        allowNull: false
      },
      nome: {
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agendamentos');
  }
};