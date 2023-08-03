const getNameCliente = require('../../controllers/Cliente/getNameCliente');


const getClienteByNameHandler = async (req, res) => {
    const { nombre } = req.query;
    try {
        const respuesta = await getNameCliente(nombre);
        return res.status(200).json(respuesta);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = getClienteByNameHandler;