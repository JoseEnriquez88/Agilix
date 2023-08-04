const postCliente = require("../../controllers/cliente/postCliente");

const postClienteHandler = async (req, res) => {
  const { nombre, telefono, email } = req.body;
  try {
    const nuevoCliente = await postCliente(nombre, telefono, email);
    return res.status(201).json({ message: nuevoCliente });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postClienteHandler;
