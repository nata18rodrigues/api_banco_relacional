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
  try {
    const response = await produtos.findAll();
    return res.json(response);
  } catch (error) {
    return res.json(error)
  } 
};

exports.listall = async (req, res) => {
  try {
    const chave_id = req.params.id
    const response = await produtos.findAll({
    where: {
      "id": chave_id
    }
  });
  if(response == 0){
    throw new Error("Produto não cadastrado");
  }
  return res.json({
    menssege:"produto localizado com sucesso"
  });
  } catch (error) {
    return res.json(error.menssege)
  }
};

exports.update = async (req, res) => {
  try {
    const chave_id = req.params.id;
    const response = await produtos.update({ preco: req.body.preco }, {
    where: {
      id: chave_id
    }
  });
  if(response == 0){
    throw new Error("Produto não cadastrado");
  }
  return res.json({
    menssege:"Alteração realizada com sucesso"
  });
  } catch (error) {
    return res.json(error.menssege)
  }
};

exports.delete = async (req, res) => {
  try {
  const chave_id = req.params.id
  const response = await produtos.destroy({
    where: {
      id: chave_id
    }
  });
  if(response == 0){
    throw new Error("Produto não cadastrado");
  }
  return res.json({
    menssege:"Produto deletado com sucesso"
  });
  } catch (error) {
    return res.json(error.menssege)
  }
};