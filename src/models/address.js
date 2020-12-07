module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "address",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: DataTypes.INTEGER,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      burgh: DataTypes.STRING,
      city: DataTypes.STRING,
      zipCode: DataTypes.STRING
    },
    {
      tableName: "address",
    }
  );

  Address.associate = function(models) {
    console.log(models);
    Address.belongsTo(models.users, { foreignKey: 'userId', as: 'owner'});
  };
  
  return Address;
};
