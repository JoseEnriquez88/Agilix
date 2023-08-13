const AllVentaValidation = require("../../helpers/Venta/AllVentaValidation");
const {Venta,Cliente,Usuario }=require("../../db")

const updateVenta = async(id,id_cliente,id_usuario,total_venta) => {
    try {
      // AllVentaValidation(id)

      if(id&&id_cliente && id_usuario && total_venta){
        const cliente = await Cliente.findByPk(id_cliente);  //traigo las instancias de cliente y usuario con los que los voy a relacionar
        const usuario = await Usuario.findByPk(id_usuario);
        const [numUpdated, updatedVentas] = await Venta.update(
          {
            total_venta:total_venta
          },
          {
            where:{
              id:id
            },
            returning: true //para obtener el registro actualizado
          })
          if (numUpdated === 0) {  //debe ser 0 si no hizo ninguna actualizacion
            throw new Error("La venta no pudo actualizarse.");
        }
        const ventaActualizada = updatedVentas[0]; //obtengo el objeto dentro del array
        await ventaActualizada.setCliente(cliente); //establezco las nuevas relaciones
        await ventaActualizada.setUsuario(usuario);
        return "Se actualizó la venta exitosamente.";	
      }
    } catch (error) {
      return { error: "No se pudo actualizar el Usuario." };
    }
}
module.exports = updateVenta