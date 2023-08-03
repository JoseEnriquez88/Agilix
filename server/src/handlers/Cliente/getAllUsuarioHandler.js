const getAllCliente = require('../../controllers/Cliente/getAllCliente');


const getAllClienteHandler = async (req, res) => {
    try {
        const clientes = await getAllCliente();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getAllClienteHandler;
