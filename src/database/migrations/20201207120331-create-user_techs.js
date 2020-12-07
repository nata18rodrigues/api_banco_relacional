"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("users_techs", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId:{
        type:Sequelize.UUID,
        allowNull:false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      techId:{
        type:Sequelize.UUID,
        allowNull:false,
        references: { model: 'techs', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable("users_techs"),
};
