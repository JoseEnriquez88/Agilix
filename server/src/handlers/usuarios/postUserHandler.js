const postUser = require("../../controllers/usuarios/postUser");

const postUserHandler = async (req, res) => {
    const { nombre, apellido, contraseña, telefono, email, dni,rol} = req.body;
    try {
        const usuarioCreado = await postUser(nombre, apellido, contraseña, telefono, email, dni, rol);
        return res.status(201).json({ message: usuarioCreado });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = postUserHandler;