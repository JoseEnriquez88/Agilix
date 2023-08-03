const getUserByName = require('../../controllers/usuarios/getUserByName');


const getUserByNameHandler = async (req, res) => {
    const { nombre } = req.query;
    try {
        const respuesta = await getUserByName(nombre);
        return res.status(200).json(respuesta);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = getUserByNameHandler;