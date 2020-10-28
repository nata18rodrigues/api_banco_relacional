const { sequelize } = require("../models");

const { users } = sequelize.models;

exports.create = async (req, res) => {
  try {
    const response = await users.create(req.body);
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
  
};

exports.list = async (req, res) => {
  try {
    const response = await users.findAll({
    where: {
      "id": req.params.id
    }
    });
    if(response == 0){
      throw new Error("Usuario não cadastrado");
    }
    return res.json({
      menssege:"login efetuado com sucesso"
    });
  } catch (error) {
    return res.json(error.menssege);
  }
  
};

exports.listall = async (req, res) => {
  try {
    const response = await users.findAll();
    return res.json(response);
  } catch (error) {
    return res.json(response);
  }
  
};

exports.update = async (req, res) => {
  try {
    const chave_id = req.params.id
    const response = await users.update({ password: req.body.senha }, {
    where: {
      id: chave_id
    }
  });
  if(response == 0){
    throw new Error("Usuario não cadastrado");
  }
  return res.json({
    menssege:"Senha alterada com sucesso "
  });
  } catch (error) {
    return res.json(error.menssege);
  }
  
};

exports.delete = async (req, res) => {
  try {
    const chave_id = req.params.id
    const response = await users.destroy({
    where: {
      id: chave_id
    }
  });
  if(response == 0){
    throw new Error("Usuario não cadastrado");
  }
  return res.json({
    menssege:"Usuario deletado com sucesso"
  });
  } catch (error) {
    return res.json(error.menssege);
  }
  
};