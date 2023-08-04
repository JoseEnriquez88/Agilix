const getAllClientes = require("../../controllers/cliente/getAllClientes");

const getAllClientesHandler = async (req, res) => {
  try {
    const clientes = await getAllClientes();
    return res.status(200).json(clientes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getAllClientesHandler;
