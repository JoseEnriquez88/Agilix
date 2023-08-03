const { Cliente } = require("../../db");
//const postClienteValidation = require("../../helpers/Cliente/postClienteValidation"); // Corrige la ruta de importación
const postCliente = async (nombre, fono, email) => {
  // postClienteValidation(nombre, fono, email); // Aquí validas el cliente y si hay un error, se lanzará una excepción

  const nuevoCliente = await Cliente.create({
    nombre,
    fono,
    email,
  });

  if (!nuevoCliente) throw new Error(`El Cliente ${nombre} no pudo crearse.`);
  return `El Cliente ${nombre} se creó exitosamente.`;
};

module.exports = postCliente;
