const { Cliente } = require("../../db");
const updateCliente = async (id, nombre, email, telefono) => {
  try {
    // Buscar el cliente por ID si se proporciona
    if (id && nombre && email && telefono) {
      const cliente = await Cliente.update(
        { nombre: nombre, email: email, telefono: telefono },
        {
          where: {
            id: id
          },
        }
      );
      return nombre;
    }
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la actualización
    return { error: "No se pudo actualizar el cliente." };
  }
};

module.exports = updateCliente;

