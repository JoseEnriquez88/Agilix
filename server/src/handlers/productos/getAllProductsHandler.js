const {
  getAllProducts,
} = require("../../controllers/productos/getAllProducts");
const {
  getProductById,
} = require("../../controllers/productos/getProductById");
const {
  getProductByName,
} = require("../../controllers/productos/getProductByName");

const getAllProductsHandlers = async (req, res) => {
  const { nombre } = req.query;

  if (nombre) {
    //Handler Buscar por Nombre

    try {
      const producto = await getProductByName(nombre);
      return res.status(200).json(producto);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    // Handler Traer todos los Productos

    try {
      const productos = await getAllProducts();
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

// Handler Buscar por ID

const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await getProductById(id);
    return res.status(200).json(producto);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProductsHandlers,
  getProductByIdHandler,
};
