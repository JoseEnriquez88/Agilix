const { Cliente } = require("../../db");

const getAllClientes = async () => {
  const clientes = await Cliente.findAll({
    attributes: ["id", "nombre", "fono", "email"],
  });
  if (clientes.length === 0) throw new Error("No se encontro el cliente");
  return clientes;
};

module.exports = getAllClientes;
