const { Usuario } = require("../../db");
const postUserValidation = require("../../helpers/usuario/postUserValidation");1

const updateUser = async (id, nombre, email, telefono, dni,rol)  => {
  // postUserValidation(nombre,email,telefono)
  console.log("updateUser","ROL:",rol)
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
    if (rol=="administrador" || rol=="cajero") {
        const usuario= await Usuario.update(
          { rol: rol },
          {
            where: {
              id: id
            },
          }
        )
        return usuario
      }
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la actualización
    return { error: "No se pudo actualizar el Usuario." };
  }
};

module.exports = updateUser;
