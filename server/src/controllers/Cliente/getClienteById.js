const { Cliente } = require("../../db");

const getClienteById = async (id) => {
  const data = await Cliente.findByPk(id);
  if (!id) throw new Error(`El id ${id} no es válido para mostrar el Cliente.`);
  return data;
};
module.exports = getClienteById;
