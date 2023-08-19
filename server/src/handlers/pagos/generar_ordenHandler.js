const generar_orden = require("../../controllers/pagos/generar_orden");

const generar_ordenHandler = async (req, res) => {
    const { InfoCarrito } = req.body;
    try {
       const orden = await generar_orden(InfoCarrito);
        res.status(201).json({ orden }); 
    } catch (error) {
        res.status(400).json({ error: "Error al generar la orden" + error.message });
    }
};

module.exports = generar_ordenHandler;