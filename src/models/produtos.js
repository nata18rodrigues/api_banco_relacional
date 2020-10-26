module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define(
    "produtos",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      preco: DataTypes.DECIMAL,
      quantidade: DataTypes.INTEGER,
    },
    {
      tableName: "produtos",
    }
  );

  // Users.associate = (models) => {};

  return Produtos;
};
