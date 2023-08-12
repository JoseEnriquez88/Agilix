const {Venta}= require("../../db")
const AllVentaValidation=require("../../helpers/Venta/AllVentaValidation")

const postVenta = async(id_cliente,id_usuario,total_venta)=>{
    // AllVentaValidation(id_cliente,id_usuario,total_venta);
    const ventas = await Venta.create({
      id_cliente,
      id_usuario,
      total_venta,
      fecha: new Date(),
    });
    if (!ventas)
    throw new Error(`La venta no pudo concretarse.`);
  return `La Venta se creó exitosamente.`;
}
module.exports= postVenta
