const getClienteByEmail = require('../../controllers/usuarios/getUserByEmail');

const getClienteByEmailHandler = async (req, res) => {
    const { email } = req.query;
    try {
        const respuesta = await getClienteByEmail(email);
        return res.status(200).json(respuesta);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = getClienteByEmailHandler;
