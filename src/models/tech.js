module.exports = (sequelize, DataTypes) => {
  const Tech = sequelize.define(
    "techs",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      
    },
    {
      tableName: "techs",
    }
  
  );

  Tech.associate = function(models) {
    console.log(models);
    Tech.belongsToMany(models.users, { foreignKey: 'userId', through: 'users_techs', as: 'users'});
  };


  return Tech;
};
