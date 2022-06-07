'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prontuarios', {
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
      time: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      atendimento: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      dentista: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      tratamento: {
        type: Sequelize.STRING,
        require: false,
        allowNull: false
      },
      extração: {
        type: Sequelize.STRING,
        require: false,
        allowNull: false
      },
      limpeza: {
        type: Sequelize.STRING,
        require: false,
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
    await queryInterface.dropTable('prontuarios');
  }
};