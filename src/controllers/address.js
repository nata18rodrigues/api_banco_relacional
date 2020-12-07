const { sequelize } = require("../models");

const { address } = sequelize.models;
const { users } = sequelize.models;

exports.create = async (req, res) => {
  const { user_id } = req.params;

  const user = await users.findByPk(user_id);

  if(!user) {
    return res.status(400).json({ error: 'User not found' });
  }
  const { street,
          number,
          burgh,
          city,
          zipCode,
        } = req.body;

  const response = await address.create({
          street,
          userId:user_id,
          number,
          burgh,
          city,
          zipCode,   
  });
 return res.json(response);
};

exports.listall = async (req, res) => {
  try {
    const response = await address.findAll();
    return res.json(response);
  } catch (error) {
    return res.json(error)
  } 
};


exports.list = async (req, res) => {
  const { user_id } = req.params;

  const user = await users.findByPk(user_id, {
    include: { association:'addresses' }
  });

  const response = await address.findAll({ where: {userId:user_id}});

  return res.json(user)
};

exports.update = async (req, res) => {
  try {
    const chave_id = req.params.id
    const response = await address.update(req.body , {
    where: {
      id: chave_id
    }
  });
  const answer = await address.findAll({
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
  const response = await address.destroy({
    where: {
      id: chave_id
    }
  });
  if(response == 0){
    throw new Error("Endereço não cadastrado");
  }
  return res.json({
    menssege:"Endereço deletado com sucesso"
  });
  } catch (error) {
    return res.json(error.menssege)
  }
};

