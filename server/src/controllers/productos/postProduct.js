const { Producto, Venta } = require("../../db");
const postProductValidation = require("../../helpers/producto/postProductValidation");

const postProduct = async (nombre, imagenURL, precio, tipo, stock) => {
  // postProductValidation(nombre, img, precio, stock);
  const productoNuevo = await Producto.create({
    nombre,
    img: imagenURL,
    precio,
    tipo,
    stock
  });

  //cuando se realice ventas aca iria la relacion entre venta y producto

  if (!productoNuevo) throw new Error(`El producto ${nombre} no pudo crearse.`);
  return `El producto ${nombre} se creó exitosamente.`;
};

module.exports = postProduct;
