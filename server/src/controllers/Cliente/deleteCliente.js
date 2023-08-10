const { Cliente } = require('../../db');

const deleteCliente = async (id, estado) => {
    // primero busco el cliente antes de "borrarlo"
    const cliente = await Cliente.findOne({ where: { id: id } });
    if(!cliente) throw new Error(`El cliente ${id} no existe`);

    cliente.estado = estado;
    await cliente.save();

    if(!cliente) throw new Error(`El cliente con el id ${id} no pudo eliminarse.`);
    return `El cliente ${cliente.nombre} fue eliminado exitosamente.`;
};

module.exports = deleteCliente;