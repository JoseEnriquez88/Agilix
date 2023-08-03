const { Usuario } = require('../../db');

const deleteUser = async (name) => {
    // primero busco el usuario antes de "borrarlo"
    const usuario = await Usuario.findOne({ where: { nombre: name } });
    if(!usuario) throw new Error(`El usuario ${name} no existe`);

    usuario.activo = false;
    await usuario.save();

    if(!usuario) throw new Error(`El usuario ${name} no pudo eliminarse.`);
    return `El usuario ${name} fue eliminado exitosamente.`;
}

module.exports = deleteUser;
