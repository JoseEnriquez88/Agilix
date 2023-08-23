const { Producto } = require("../../db");
const monitoreoStock = require('./../monitoreoStock/monitoreoStock');

const getAllProducts = async () => {
  try {
    const productos = await Producto.findAll({
      attributes: ["id", "nombre", "img", "precio", "tipo", "estado", "stock"],
    });
    
    if (productos.length === 0) {
      throw new Error("No se encontraron productos para mostrar.");
    }

    // Llama a la función de monitoreo de stock para cada producto
    productos.forEach((producto) => {
      monitoreoStock(producto);
    });

    return productos;
  } catch (error) {
    throw new Error("Error al obtener los productos.");
  }
}
module.exports = getAllProducts;
