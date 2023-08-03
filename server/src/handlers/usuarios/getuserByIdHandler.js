const getuserById = require('../../controllers/usuarios/getuserById');


const getuserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const respuesta = await getuserById(id);
        return res.status(200).send(respuesta);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = getuserByIdHandler;