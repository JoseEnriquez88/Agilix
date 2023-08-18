const { Cliente,Venta,Producto,Detalle_Venta } = require("../../db");

const getClienteById = async (id) => {
  if (!id) throw new Error(`El id ${id} no es válido para mostrar el Cliente.`);
  const data = await Cliente.findByPk(id,{
    include: {
      model: Venta,
      attributes: ["id","fecha", "total_venta"],
      include:[
        {
          model:Producto,
          attributes: ["id","nombre","precio"],
          through:{
            model:Detalle_Venta,
            attributes: ["VentumId", "ProductoId","cantidad"],
          }
        }
      ]
    }
  }
    );
  return data;
};
module.exports = getClienteById;
