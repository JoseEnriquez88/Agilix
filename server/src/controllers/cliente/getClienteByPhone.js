const { Cliente } = require('../../db');

const getClienteByPhone = async (telefono) => {
    const clientePorTelefono = await Cliente.findOne({
        where: { telefono },
        attributes: ['id', 'nombre', 'telefono', 'email', 'dni', 'estado'],
    });
    if (!clientePorTelefono) throw new Error(`No existe cliente con el telefono: ${telefono}`);
    return clientePorTelefono;
}

module.exports = getClienteByPhone;

