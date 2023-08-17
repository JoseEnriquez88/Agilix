const { Cliente,Venta,Producto,Detalle_Venta } = require("../../db");

const getClienteById = async (id) => {
  if (!id) throw new Error(`El id ${id} no es válido para mostrar el Cliente.`);
  const data = await Cliente.findByPk(id,{
    include: {
      model: Venta,
      attributes: ["id","fecha"],
      include: {
        model: Detalle_Venta,
        attributes: ["cantidad"],
        include: {
          model: Producto,
          attributes: ["nombre", "precio"],
        },
      }
    }
  }
    );
  if (!id) throw new Error(`El id ${id} no es válido para mostrar el Cliente.`);
  return data;
};
module.exports = getClienteById;
