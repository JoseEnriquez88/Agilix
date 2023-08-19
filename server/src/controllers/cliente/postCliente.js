const { Cliente } = require("../../db");
const postClienteValidation = require('../../helpers/cliente/postClienteValidation');

const postCliente = async (nombre, telefono, email, dni) => {
  postClienteValidation(nombre, telefono, email, dni);

  const nuevoCliente = await Cliente.create({
    nombre,
    telefono,
    email,
    dni,
  });

  if (!nuevoCliente) throw new Error(`El cliente ${nombre} no pudo crearse.`);
  return `El cliente ${nombre} se creó exitosamente.`;
};

module.exports = postCliente;
