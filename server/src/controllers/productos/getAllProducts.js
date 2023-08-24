const { Producto } = require("../../db");

const getAllProducts = async () => {
  try {
    const productos = await Producto.findAll({
      attributes: ["id", "nombre", "img", "precio", "tipo", "estado", "stock"],
    });

    if (productos.length === 0) {
      throw new Error("No se encontraron productos para mostrar.");
    }


    return productos;
  } catch (error) {
    throw new Error("Error al obtener los productos.");
  }
};

module.exports = getAllProducts;

