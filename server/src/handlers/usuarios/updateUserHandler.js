const updateUser = require('../../controllers/usuarios/updateUser');
const deleteUser = require('../../controllers/usuarios/deleteUser');

const updateUserHandler = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, email, telefono, dni, estado} = req.body;

  try {
   const respuesta =(typeof estado!=="boolean")? await updateUser(id, nombre, email, telefono, dni):await deleteUser(id, estado); // Llamada a la función updateUser con el parámetro estado
    res.status(200).json({ message: `Actualización exitosa del cliente ${respuesta}` });
  } catch (err) {
    console.error('Error:', err);

    let statusCode = 500;
    let message = 'Error interno del servidor.';

    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = err.message;
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      statusCode = 409;
      message = 'El registro ya existe en la base de datos.';
    }

    res.status(statusCode).json({ message });
  }
};

module.exports = updateUserHandler;
