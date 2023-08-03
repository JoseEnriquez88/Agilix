const { Usuario } = require('../../db');

const getuserById = async (id) => {
    if(isNaN(id)){
        const usuarioPorId = await Usuario.findByPk(id, {
            attributes: ['id', 'nombre', 'telefono', 'email'],
        });
        return usuarioPorId;
    }else throw new Error(`No existe el usuario con el el id: ${id}`);
};

module.exports = getuserById;