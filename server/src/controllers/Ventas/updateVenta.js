const AllVentaValidation = require("../../helpers/Venta/AllVentaValidation");
const {Venta}=require("../db")

const updateVenta = async(id,id_cliente,id_usuario,total_venta) => {
    try {
      AllVentaValidation(id)
      if(id&&id_cliente && id_usuario && total_venta){
        const ventaupdate = await Venta.update(
          {
            id_cliente:id_cliente,
            id_usuario:id_usuario,
            total_venta:total_venta
          },
          {
            where:{
              id:id
            }
          })
          return ventaupdate;
      }
    } catch (error) {
      return { error: "No se pudo actualizar el Usuario." };
    }
}
module.exports = updateVenta