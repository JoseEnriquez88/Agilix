const getByIdCliente = require('../../controllers/Cliente/getByIdCliente');


const getClienteByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const respuesta = await getByIdCliente(id);
        return res.status(200).send(respuesta);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getClienteByIdHandler;