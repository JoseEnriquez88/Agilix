const { Cliente } = require('../../db');

const getClienteByEmail = async (email) => {
    const clientePorEmail = await Cliente.findOne({
        where: { email },
        attributes: ['id', 'nombre', 'telefono', 'email'],
    });
    if(!clientePorEmail) throw new Error(`No existe Cliente con el email: ${email}`);
    return clientePorEmail;
}

module.exports = getClienteByEmail;