const { Usuario } = require("../../db");
const postUserValidation = require("../../helpers/usuario/postUserValidation");

const postUser = async (nombre, telefono, email, dni, rol) => {
  postUserValidation(nombre, telefono, email,dni,rol);

  const usuarioNuevo = await Usuario.create({
    nombre,
    telefono,
    email,
    dni,
    rol
  });

  if (!usuarioNuevo)
    throw new Error(`El usuario con nombre: ${nombre}, no pudo crearse.`);
  return `El usuario: ${nombre}, se creó exitosamente.`;
};

module.exports = postUser;
