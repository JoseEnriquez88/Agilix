const { Usuario } = require('../../db');

const getUserByEmail = async (email) => {
    const usuarioPorEmail = await Usuario.findOne({
        where: { email },
        attributes: ['id', 'nombre', 'telefono', 'email'],
    });
    if(!usuarioPorEmail) throw new Error(`No existe el usuario con el email: ${email}`);
    return usuarioPorEmail;
}

module.exports = getUserByEmail;