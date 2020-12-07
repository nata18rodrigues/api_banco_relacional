const { sequelize } = require("../models");
const { techs } = sequelize.models;
const { users } = sequelize.models;

exports.create = async (req, res) => {
    const { user_id } = req.params;
    const { name } = req.body;

     const user = await users.findByPk(user_id);

    if(!user) {
        return res.status(400).json({ error: 'Users not found'});
    }
    const tech = await techs.findOne({
        where: { name }
    });
    
    await tech.addUser(user);

    return res.json(tech);

};
  

exports.list = async (req, res) => {
    const response = await techs.findAll();
    return res.json(response);
};


exports.delete = async (req, res) => {
    const { id } = req.params
    const response = await techs.destroy({
      where: {
        id: id,
      }
    });
    return res.json(response);
    
};