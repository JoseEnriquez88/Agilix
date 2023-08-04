const deleteCliente = require('../../controllers/Cliente/deleteCliente');

const deleteClienteHandler = async (req, res) => {
    const { nombre } = req.params;
    try {
        const mensaje = await deleteCliente(nombre);
        return res.status(204).json({ message: mensaje });
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = deleteClienteHandler;