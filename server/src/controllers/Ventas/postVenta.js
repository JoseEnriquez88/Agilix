const { Venta, Cliente, Usuario, Producto, Detalle_Venta } = require("../../db")
const AllVentaValidation = require("../../helpers/Venta/AllVentaValidation")

const postVenta = async (id_cliente, id_usuario, total_venta, productos) => { //productos será un array de ID's de productos
  // AllVentaValidation(id_cliente,id_usuario,total_venta);

  const cliente = await Cliente.findByPk(id_cliente)
  const usuario = await Usuario.findByPk(id_usuario);
  if (!cliente || !usuario) {
    throw new Error(`No se encontró cliente o usuario.`);
  }

  console.log(cliente);

  const ventas = await Venta.create({
    total_venta,
    fecha: new Date(),
  });

  await ventas.setCliente(cliente);
  await ventas.setUsuario(usuario);

  if (!ventas)
    throw new Error(`La venta no pudo concretarse.`);

  if (productos && productos.length === 0) throw new Error(`No se enviaron productos.`); //verifico que el array de productos tenga al menos un producto

  for (const productoId of productos) {  //por cada id de producto haré una asociación de la venta con el producto
    let producto = await Producto.findByPk(productoId);  //traigo el producto a asociar
    if (!producto) throw new Error(`El producto o los productos no existen.`); //verifico que el id del producto a enviar fue correcto
    await Detalle_Venta.create({ //creo las relaciones en la tabla asociación
      VentumId: ventas.id,
      ProductoId: producto.id,
    })
  }

  return `La Venta se creó exitosamente.`;
}
module.exports = postVenta
