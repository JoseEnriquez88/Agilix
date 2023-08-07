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

// // Verificar qué campos se deben actualizar
// if (nombre !== undefined) {
//   cliente.nombre = nombre;
// }

// if (email !== undefined) {
//   cliente.email = email;
// }

// if (telefono !== undefined) {
//   cliente.telefono = telefono;
// }

// // Si se proporciona el estado, actualizamos el atributo "activo"
// if (estado !== undefined) {
//   cliente.activo = estado;
// }

// // Guardamos los cambios en la base de datos
// await cliente.save();

// try {
//   const cliente = await Cliente.update();
// const cliente = await Cliente.findByPk(id);
// if (!cliente) {
//   return res.status(404).json({ message: 'Cliente no encontrado.' });
// }

// // Actualizar los campos del Cliente

// Cliente.name = name;
// Cliente.email = email;
// // Agregar más campos aquí si los tienes.

// await cliente.save();
//   return res.json({ message: "Cliente actualizado exitosamente." });
// } catch (error) {
//   console.error("Error al actualizar el Cliente:", error);
//   next(error);
// }
