const updateProducto = require('../../controllers/productos/updateProducts');
const deleteProducto = require('../../controllers/productos/deleteProducto');

const updateProductoHandler = async (req, res, next) => {
  const { id } = req.params;
  const { nombre,img,precio,estado, cantidad } = req.body;

  try {
    const respuesta = (typeof estado!=="boolean")? await updateProducto(id,nombre,img,precio,cantidad): await deleteProducto(id,estado);
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

module.exports = updateProductoHandler;
