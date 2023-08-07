const deleteProducto = require('../../controllers/productos/deleteProducto');

const deleteProductoHandler = async (req, res) => {
    const { nombre } = req.params;
    try {
        const mensaje = await deleteProducto(nombre);
        return res.status(204).json({ message: mensaje });
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = deleteProductoHandler;