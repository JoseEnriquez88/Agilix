const getAllClientes = require("../../controllers/cliente/getAllClientes");
const getClienteByName = require("../../controllers/cliente/getClienteByName");
const getClienteByEmail = require("../../controllers/cliente/getClienteByEmail");
const getClienteById = require("../../controllers/cliente/getClienteById");

const getAllClientesHandler = async (req, res) => {
  const { nombre, email } = req.query;
  if (nombre && !email) {
    try {
      //Handler Buscar por Nombre

      const respuesta = await getClienteByName(nombre);
      return res.status(200).json(respuesta);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  } else if (!nombre && email) {
    //Handler Buscar por Email

    try {
      const respuesta = await getClienteByEmail(email);
      return res.status(200).json(respuesta);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  } else {
    //Handler Traer Todos los Clientes

    try {
      const clientes = await getAllClientes();
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

//Handler Buscar Cliente por ID

const getClienteByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const respuesta = await getClienteById(id);
    return res.status(200).send(respuesta);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllClientesHandler,
  getClienteByIdHandler,
};
