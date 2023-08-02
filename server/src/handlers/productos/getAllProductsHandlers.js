const getAllProducts = require('../../controllers/productos/getAllProducts');


const getAllProductsHandlers = async (req, res) => {
    try {
        const productos = await getAllProducts();
        return res.status(200).json(productos);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = getAllProductsHandlers;