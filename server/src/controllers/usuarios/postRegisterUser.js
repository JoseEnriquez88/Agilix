const { Usuario } = require('../../db');
const postRegisterUserHandler = require('../../helpers/usuario/postRegisterUserValidation');

const postRegisterUser = async (nombre, apellido, telefono, email, contraseña, dni, rol) => {
    postRegisterUserHandler(nombre, apellido, telefono, email, contraseña, dni, rol);

    const usuarioRegistrado = await Usuario.create({
        nombre,
        apellido,
        telefono,
        email,
        contraseña,
        dni,
        rol
    });

    if(!usuarioRegistrado) throw new Error(`El usuario: ${nombre} no pudo registrarse.`);
    return `El usuario: ${nombre} se registró exitosamente.`;
};

module.exports = postRegisterUser;
