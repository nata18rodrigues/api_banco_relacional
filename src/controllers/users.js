const { sequelize } = require("../models");
const { users } = sequelize.models;

exports.create = async (req, res) => {
  
  try {
    const response = await users.create({
      ...req.body,
      imgUser: `http://localhost:3333/uploads/${req.file.filename}`
    });
    console.log("body",req.body)
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
      return res.json({
        menssege:"usuario não cadastrado"
      })
    }
    return res.json(response[0]);
  } catch (error) {
    return res.json(error.menssege);
  }
  
};

exports.paginados = async (req, res) => {
  try {
    const response = await users.findAll();
    const pos = req.query.page;
    const num = req.query.page_size;
    const pages = response.length;
    const porPage = response.splice(pos,num);
    return res.json([porPage].concat(pages));
  } catch (error) {
    return res.json(response);
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
  const answer = await users.findAll({
    where: {
      "id": req.params.id
    }
    });
  if(response == 0){
    response;
  }
  return res.json(answer[0]);
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
    return res.json([{menssege:"Usuario não cadastrado"}]);
  }
  return res.json([{
    menssege:"Usuario deletado com sucesso"
  }]);
  } catch (error) {
    return res.json(error.menssege);
  }
  
};