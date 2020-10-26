module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "users",
    }
  );

  // Users.associate = (models) => {};

  return Users;
};
