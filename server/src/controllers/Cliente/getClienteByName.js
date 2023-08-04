const { Cliente } = require("../../db");
const { Op } = require("sequelize");

const getClienteByName = async (nombre) => {
  if (nombre) {
    const data = await Cliente.findAll({
      where: {
        nombre: { [Op.iLike]: `${nombre}%` },
      },
    });
    return [...data];
  }
};

module.exports = getClienteByName;
