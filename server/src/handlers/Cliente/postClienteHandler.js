const postAllCliente = require('../../controllers/Cliente/postCliente');


const postAllClienteHandlers = async (req, res) => {
    const { nombre, fono, email } = req.body;
    try {
      const nuevoCliente = await postAllCliente(nombre, fono, email);
      return res.status(201).json({ message: nuevoCliente });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

module.exports = postAllClienteHandlers;
