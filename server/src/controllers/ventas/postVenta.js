const {
  Venta,
  Cliente,
  Usuario,
  Producto,
  Detalle_Venta,
} = require("../../db");
const allVentaValidation = require("../../helpers/venta/allVentaValidationt");

const postVenta = async (id_cliente, id_usuario, total_venta, productos) => {
  // allVentaValidation(id_cliente,id_usuario,total_venta);

  const cliente = await Cliente.findByPk(id_cliente);
  const usuario = await Usuario.findByPk(id_usuario);
  if (!cliente || !usuario)
    throw new Error(`No se encontró cliente o usuario.`);

  const ventas = await Venta.create({
    total_venta,
    fecha: new Date(),
  });

  await ventas.setCliente(cliente);
  await ventas.setUsuario(usuario);

  if (!ventas) throw new Error(`La venta no pudo concretarse.`);
  await usuario.addVenta(ventas);
  await cliente.addVenta(ventas);

  for (const producto of productos) {
    await producto.addVenta(ventas);
    stockUpdated = await Producto.findByPk(producto.id);
    if (stockUpdated.stock >= producto.cantidad) {
      stockUpdated.stock -= producto.cantidad;
      await stockUpdated.save();
    } else {
      throw new Error(
        `No hay suficiente stock del producto ${producto.nombre} Para realizar la Venta.`
      );
    }
    const detalleVenta = await Detalle_Venta.create({
      idVenta: ventas.id,
      idProducto: producto.id,
      cantidad: producto.stock,
    });
  }
  return `La Venta se creó exitosamente.`;
};
module.exports = postVenta;
