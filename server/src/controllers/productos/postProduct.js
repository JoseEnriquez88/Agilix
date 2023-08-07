const { Producto, Venta } = require("../../db");
const postProductValidation = require("../../helpers/producto/postProductValidation");

const postProduct = async (nombre, img, precio) => {
  postProductValidation(nombre, img, precio);
  const productoNuevo = await Producto.create({
    nombre,
    img,
    precio,
  });

  //cuando se realice ventas aca iria la relacion entre venta y producto

  if (!productoNuevo) throw new Error(`El producto ${nombre} no pudo crearse.`);
  return `El producto ${nombre} se creó exitosamente.`;
};

module.exports = postProduct;
