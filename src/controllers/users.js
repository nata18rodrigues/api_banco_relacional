const { sequelize } = require("../models");

const { users } = sequelize.models;

exports.create = async (req, res) => {
  const response = await users.create(req.body);

  return res.json(response);
};

exports.list = async (req, res) => {
  const response = await users.findAll();

  return res.json(response);
};
