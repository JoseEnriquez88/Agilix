const eliminar_orden = require("../../controllers/pagos/eliminar_orden");

const eliminar_ordenHandler = async (req, res) => {
    try {
        await eliminar_orden();
        res.status(200).json({ message: "Orden eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar la orden" + error.message });
    }
}

module.exports = eliminar_ordenHandler;