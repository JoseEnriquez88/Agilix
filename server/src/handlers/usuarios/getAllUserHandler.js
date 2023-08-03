const getAllUsers = require('../../controllers/usuarios/getAllUsers');


const getAllUserHandler = async (req, res) => {
    try {
        const usuarios = await getAllUsers();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = getAllUserHandler;