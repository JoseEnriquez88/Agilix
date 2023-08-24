const { Usuario } = require("../../db");
const postUserValidation = require("../../helpers/usuario/postUserValidation");

const postUser = async (nombre, apellido, contraseña, telefono, email, dni, rol) => {
  // postUserValidation(nombre, telefono, email,dni,rol);
console.log(nombre,apellido,contraseña);
  const usuarioNuevo = await Usuario.create({
    nombre,
    telefono,
    email,
    dni,
    rol,
    apellido,
    contraseña
  });

  if (!usuarioNuevo)
    throw new Error(`El usuario con nombre: ${nombre}, no pudo crearse.`);
  return `El usuario: ${nombre}, se creó exitosamente.`;
};

module.exports = postUser;
