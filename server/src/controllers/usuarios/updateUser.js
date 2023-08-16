const { Usuario,Venta } = require("../../db");

const updateUser = async (id, nombre, email, telefono, dni, ventaId)  => {
  try {
    // Buscar el cliente por ID si se proporciona
    if (id && nombre && email && telefono) {
      const usuario = await Usuario.update(
        { nombre: nombre, email: email, telefono: telefono, dni: dni },
        {
          where: {
            id: id
          },
        }
      );
      return usuario;
    }
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la actualización
    return { error: "No se pudo actualizar el Usuario." };
  }
};

module.exports = updateUser;
