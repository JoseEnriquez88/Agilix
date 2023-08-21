const {
  Venta,
  Cliente,
  Usuario,
  Producto,
  Detalle_Venta,
} = require("../../db");
const allVentaValidation = require("../../helpers/venta/allVentaValidationt");

const postVenta = async (id_cliente, id_usuario, total_venta, productos, id_mercado_pago, fecha) => {
  // allVentaValidation(id_cliente,id_usuario,total_venta);

  const cliente = await Cliente.findByPk(id_cliente);
  const usuario = await Usuario.findByPk(id_usuario);
  if (!cliente || !usuario)
    throw new Error(`No se encontró cliente o usuario.`);

  const ventas = await Venta.create({
    total_venta,
    id_mercado_pago,
    fecha
  });

  await ventas.setCliente(cliente);
  await ventas.setUsuario(usuario);

  if (!ventas) throw new Error(`La venta no pudo concretarse.`);

  for (const producto of productos) {
    // await producto.addVenta(ventas); genera error
    const stockUpdated = await Producto.findByPk(producto.id);
    if (stockUpdated.stock >= producto.cantidad) {
      stockUpdated.stock -= producto.cantidad;
      await stockUpdated.save();
    } else {
      throw new Error(
        `No hay suficiente stock del producto ${producto.nombre} Para realizar la Venta.`
      );
    }
    const detalleVenta = await Detalle_Venta.create({
      VentumId: ventas.id,
      ProductoId: producto.id,
      cantidad: producto.cantidad,
    });
  }
  return `La Venta se creó exitosamente.`;
};
module.exports = postVenta;
