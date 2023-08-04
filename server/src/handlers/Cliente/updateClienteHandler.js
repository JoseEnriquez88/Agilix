const updateCliente = require ('../../controllers/Cliente/UpdateCliente')
const errorUpdateHandler = (err,req, res,next)=> {
    console.error('Error:', err);
  
    // Determinar el código de estado y mensaje de error según el tipo de error
    let statusCode = 500;
    let message = 'Error interno del servidor.';
    
    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = err.message;
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      statusCode = 409;
      message = 'El registro ya existe en la base de datos.';
    }
  
    return res.status(statusCode).json({ message });
  };
  
  module.exports = errorUpdateHandler;