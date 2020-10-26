"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      },
      quantidade: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable("produtos"),
};
