const updateCliente = require ('../../controllers/Cliente/updateCliente')
const deleteCliente = require ('../../controllers/Cliente/deleteCliente')

const updateClienteHandler = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, email, telefono, dni, estado} = req.body;
  try {
    const respuesta = (typeof estado!=="boolean")?await updateCliente(id,nombre, email, telefono, dni):await deleteCliente(id,estado);
  console.log(respuesta);
    res.status(200).json({respuesta});
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
