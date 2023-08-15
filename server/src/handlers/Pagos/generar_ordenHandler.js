const generar_orden = require("../../controllers/Pagos/generar_orden");

const generar_ordenHandler = async (req, res) => {
    const { InfoCarrito } = req.body;
    console.log("Esto llegó al handler: " + InfoCarrito);
    try {
       const orden = await generar_orden(InfoCarrito);
        res.status(201).json({ orden }); 
    } catch (error) {
        res.status(400).json({ error: "Error al generar la orden" + error.message });
    }
};

module.exports = generar_ordenHandler;