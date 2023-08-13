const { Venta, Cliente, Usuario } = require("../../db")
const AllVentaValidation = require("../../helpers/Venta/AllVentaValidation")

const postVenta = async (id_cliente, id_usuario, total_venta) => {
  // AllVentaValidation(id_cliente,id_usuario,total_venta);
  console.log(id_cliente, id_usuario);

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
  return `La Venta se creó exitosamente.`;
}
module.exports = postVenta
