const { Cliente } = require('../../db');

const getClienteByDni = async (dni) => {
    const clientePorDni = await Cliente.findOne({
        where: { dni },
        attributes: ['id', 'nombre', 'telefono', 'email', 'dni', 'estado'],
    });
    if (!clientePorDni) throw new Error(`No existe cliente con el DNI: ${dni}`);
    return clientePorDni;
}

module.exports = getClienteByDni;

