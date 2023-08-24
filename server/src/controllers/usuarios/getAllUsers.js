const { Usuario } = require("../../db");


const getAllUsers = async () => {
    const totalUsuarios = await Usuario.findAll({
        attributes: ['id', 'nombre', 'apellido', 'telefono', 'email','dni', 'estado', 'rol', 'contraseña', 'img'],
    });

    if(totalUsuarios.length === 0) throw new Error('No se encontraron usuarios para mostrar')
    return totalUsuarios;

}

module.exports = getAllUsers;