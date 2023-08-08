const updateCliente = require ('../../controllers/Cliente/updateCliente')
const updateClienteHandler = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, email, telefono } = req.body;

  try {
   const respuesta = await updateCliente(id,nombre, email, telefono);
  console.log(respuesta);
   res.status(200).json({ message: `Actualización exitosa del cliente ${respuesta}` });
  } catch (err) {
    console.error('Error:', err);

    let statusCode = 500;
    let message = 'Error interno del servidor.';

    if (err.nombre === 'ValidationError') {
      statusCode = 400;
      message = err.message;
    } else if (err.nombre === 'SequelizeUniqueConstraintError') {
      statusCode = 409;
      message = 'El registro ya existe en la base de datos.';
    }

    res.status(statusCode).json({ message });
  }
};

module.exports = updateClienteHandler;
