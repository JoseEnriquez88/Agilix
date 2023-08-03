const { Usuario } = require("../../db");
const postUserValidation = require('../../helpers/usuario/postUserValidation');

const postUser = async (nombre, telefono, email) => {
    postUserValidation(nombre, telefono, email);

    const usuarioNuevo = await Usuario.create({
        nombre,
        telefono,
        email,
    });

    if(!usuarioNuevo) throw new Error(`El usuario con nombre: ${nombre}, no pudo crearse.`);
    return `El usuario: ${nombre}, se creó exitosamente.`;
}

module.exports = postUser;
