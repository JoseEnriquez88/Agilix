const deleteUser = require('../../controllers/usuarios/deleteUser');

const deleteUserHandler = async (req, res) => {
    const { nombre } = req.params;
    try {
        const mensaje = await deleteUser(nombre);
        return res.status(204).json({ message: mensaje });
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = deleteUserHandler;
