const { Usuario } = require('../../db');

const deleteUser = async (id,estado) => {
    // primero busco el usuario antes de "borrarlo"

    const usuario = await Usuario.findOne({ where: { id: id } });
    if(!usuario) throw new Error(`El usuario ${id} no existe`);

    usuario.estado = estado;
    await usuario.save();

    if(!usuario) throw new Error(`El usuario con el id ${id} no pudo eliminarse.`);
    return `El usuario ${usuario.nombre} fue eliminado exitosamente.`;
}

module.exports = deleteUser;
