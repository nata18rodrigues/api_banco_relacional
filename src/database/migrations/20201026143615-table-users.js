"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      email:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      imgUser:Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable("users"),
};
