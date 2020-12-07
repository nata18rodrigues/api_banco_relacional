module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      imgUser:DataTypes.STRING,
    },
    {
      tableName: "users",
    }
  );

  Users.associate = function(models) {
    console.log(models);
    Users.hasMany(models.address, { foreignKey: 'userId', as: 'addresses'});
    Users.belongsToMany(models.techs, { foreignKey: 'userId', through: 'users_techs', as: 'techs'});
  };

  return Users;
};
