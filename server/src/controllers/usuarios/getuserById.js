const { Usuario } = require("../../db");

const getUserById = async (id) => {
  if (isNaN(id)) {
    const usuarioPorId = await Usuario.findByPk(id, {
      attributes: ["id", "nombre", "telefono", "email", "dni", "estado"],
    });
    return usuarioPorId;
  } else throw new Error(`No existe el usuario con el el id: ${id}`);
};

module.exports = getUserById;
