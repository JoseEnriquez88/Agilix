const postProduct = require("../../controllers/productos/postProduct");

const postProductHandler = async (req, res) => {
  const { nombre, img, precio, tipo } = req.body;
  try {
    const productosCreados = await postProduct(nombre, img, precio, tipo);
    return res.status(201).json(productosCreados);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postProductHandler;
