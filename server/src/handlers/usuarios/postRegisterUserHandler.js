const postRegisterUser = require('../../controllers/usuarios/postRegisterUser');

const postRegisterUserHandler = async (req, res) => {
    const { nombre, apellido, telefono, email, contraseña, dni, rol } = req.body;
    try {
        const usuarioRegistrado = await postRegisterUser(nombre, apellido, telefono, email, contraseña, dni, rol);
        return res.status(201).json({ message: usuarioRegistrado });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = postRegisterUserHandler;
