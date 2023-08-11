const { Usuario } = require("../../db");


const getAllUsers = async () => {
    const totalUsuarios = await Usuario.findAll({
        attributes: ['id', 'nombre', 'telefono', 'email','dni', 'estado'],
    });

    if(totalUsuarios.length === 0) throw new Error('No se encontraron usuarios para mostrar') 
    return totalUsuarios;
}

module.exports = getAllUsers;