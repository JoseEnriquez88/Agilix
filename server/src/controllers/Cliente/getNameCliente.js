const { Cliente } = require('../../db');
const { Op } = require('sequelize'); 

const getNameCliente = async (nombre) => {
    if(nombre){
        const nombre = await Cliente.findAll({
            where:{
                nombre: { [Op.iLike]: `${nombre}%`,}
            },
        });
        return [...nombre];
    }
};

module.exports = getNameCliente;