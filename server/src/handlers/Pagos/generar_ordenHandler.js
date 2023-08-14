const generar_orden = require("../../controllers/Pagos/generar_orden");

const generar_ordenHandler = async (req, res) => {
    const { items } = req.body;
    try {
       const orden = await generar_orden(items);
        res.status(201).json(orden); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = generar_ordenHandler;