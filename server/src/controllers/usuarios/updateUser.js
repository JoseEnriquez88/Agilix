const { Usuario } = require("../../db");
const postUserValidation = require("../../helpers/usuario/postUserValidation");

const updateUser = async (id, nombre, apellido, email, telefono, dni,rol, contraseña, imgURL)  => {
  // postUserValidation(nombre,email,telefono)
  console.log("updateUser","ROL:",rol)
  try {
    // Buscar el cliente por ID si se proporciona
    if (id && nombre && email && telefono) {
      const updateData = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        dni: dni,
        contraseña: contraseña,
      }
      if(imgURL){
        updateData.img = imgURL // En caso de que manden una imagen se agrega al cuerpo asi no se sobrescribe la url de la imagen
      }
      console.log("updateUser contraseña",updateData.contraseña)
      const usuario = await Usuario.update( updateData,
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
