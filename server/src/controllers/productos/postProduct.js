const { Producto, Venta } = require("../../db");
const postProductValidation = require("../../helpers/producto/postProductValidation");

const postProduct = async (nombre, img, precio, cantidad) => {
  postProductValidation(nombre, img, precio, cantidad);
  const productoNuevo = await Producto.create({
    nombre,
    img,
    precio,
    cantidad,
  });

  //cuando se realice ventas aca iria la relacion entre venta y producto

  if (!productoNuevo) throw new Error(`El producto ${nombre} no pudo crearse.`);
  return `El producto ${nombre} se creó exitosamente.`;
};

module.exports = postProduct;
