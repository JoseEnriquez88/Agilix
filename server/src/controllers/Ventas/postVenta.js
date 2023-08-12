const Venta= require("../../db")
const AllVentaValidation=require("../../helpers/Venta/AllVentaValidation")

const postVenta=async(id_cliente,id_usuario,total_venta)=>{
  AllVentaValidation(id_cliente,id_usuario,total_venta);
    const ventas = await Venta.create({
        id_cliente:id_cliente,
        id_usuario:id_usuario,
        total_venta:total_venta
    });
    if (!ventas)
    throw new Error(`La venta no pudo concretarse.`);
  return `La Venta se creó exitosamente.`;
}
module.exports= postVenta
