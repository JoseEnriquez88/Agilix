const { Usuario } = require('../../db');
const { Op } = require('sequelize'); 

const getUserByName = async (nombre) => {
    if(nombre){
        const nombreUsuario = await Usuario.findAll({
            where:{
                nombre: { [Op.iLike]: `${nombre}%`,}
            },
        });
        return [...nombreUsuario];
    }
};

module.exports = getUserByName;

