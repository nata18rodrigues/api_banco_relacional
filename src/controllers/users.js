const { sequelize } = require("../models");

const { users } = sequelize.models;

exports.create = async (req, res) => {
  const response = await users.create(req.body);

  return res.json(response);
};

exports.list = async (req, res) => {
  const response = await users.findAll({
    where: {
      "id": req.params.id
    }
  });
  return res.json(response);
};

exports.listall = async (req, res) => {
  const response = await users.findAll();
  return res.json(response);
};

exports.update = async (req, res) => {
  const chave_id = req.params.id
  const response = await users.update({ password: req.body.senha }, {
    where: {
      id: chave_id
    }
  });
  return res.json(response);
};

exports.delete = async (req, res) => {
  const chave_id = req.params.id
  const response = await users.destroy({
    where: {
      id: chave_id
    }
  });
  return res.json(response);
};