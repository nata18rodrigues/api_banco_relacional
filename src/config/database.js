const path = require("path");

module.exports = {
  username: "root",
  password: "root",
  database: "db-local",
  host: "127.0.0.1",
  dialect: "sqlite",
  storage: path.resolve(__dirname, "..", "..", "data", "database.sqlite"),
  // port: process.env.DB_PORT,
  // operatorsAliases: false,
  config: {
    timestamps: true,
  },
};
