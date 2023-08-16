const postVenta = require("../../controllers/Ventas/postVenta");


const postUserHandler = async (req, res) => {
    const { id_cliente,id_usuario,total_venta } = req.body;
    try {
        const ventaCreada = await postVenta(id_cliente,id_usuario,total_venta);
        return res.status(201).json({ message: ventaCreada });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = postUserHandler;