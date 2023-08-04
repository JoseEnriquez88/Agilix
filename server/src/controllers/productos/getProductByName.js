const { Productos } = require("../../db");
const { Op } = require("sequelize");
const getProductByNameValidation = require("../../helpers/producto/getProductByNameValidation");

const getProductByName = async (name) => {
  getProductByNameValidation(name);
  const data = await Productos.find({
    where: { nombre: { [Op.ilike]: `${name}%` } },
  });
  if (data.length === 0)
    throw new Error(`No se encontraron productos para mostrar.`);

  return [...data];
};

module.exports = getProductByName;
