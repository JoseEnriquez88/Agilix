const { Usuario } = require("../../db");


const getAllUsers = async () => {
    const totalUsuarios = await Usuario.findAll({
        attributes: ['id', 'nombre', 'apellido', 'contraseña', 'telefono', 'email', 'dni', 'estado', 'rol'],
    });

    if (totalUsuarios.length === 0) throw new Error('No se encontraron usuarios para mostrar')
    return totalUsuarios;
}

module.exports = getAllUsers;