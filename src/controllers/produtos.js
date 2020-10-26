const { sequelize } = require("../models");

const { produtos } = sequelize.models;

exports.create = async (req, res) => {
try {
  const response = await produtos.create(req.body);
  return res.json(response);
} catch (error) {
  return res.json(error);
}

  
};

exports.list = async (req, res) => {
  const response = await produtos.findAll();
  return res.json(response);
};

