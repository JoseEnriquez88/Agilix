const { Venta } = require("../../db");
const allVentaValidation = require("../../helpers/venta/allVentaValidationt");

const getVentaById = async (id) => {
  // allVentaValidation(id)
  const venta = await Venta.findByPk(id);
  if (!venta) {
    throw new Error("La venta no existe");
  }
  console.log(venta);
  return venta;
};

module.exports = getVentaById;
