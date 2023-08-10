const { Producto } = require("../../db");

const updateProducto = async (id, nombre, img, precio, tipo) => {
  try {
    // Buscar el cliente por ID si se proporciona
    if (id && nombre && img && precio && tipo) {
      const cliente = await Producto.update(
        { nombre: nombre, img: img, precio: precio, tipo: tipo },
        {
          where: {
            id: id
          },
        }
      );
      return nombre;
    }
  } catch (error) {
    // Manejo de errores si ocurre algún problema con la actualización
    return { error: "No se pudo actualizar el producto." };
  }
};

module.exports = updateProducto;
