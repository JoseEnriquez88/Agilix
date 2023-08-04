const { Cliente } = require('../../db');

const deleteCliente = async (name) => {
    // primero busco el cliente antes de "borrarlo"
    const cliente = await Cliente.findOne({ where: { nombre: name } });
    if(!cliente) throw new Error(`El cliente ${name} no existe`);

    cliente.activo = false;
    await cliente.save();

    if(!cliente) throw new Error(`El cliente ${name} no pudo eliminarse.`);
    return `El cliente ${name} fue eliminado exitosamente.`;
};

module.exports = deleteCliente;