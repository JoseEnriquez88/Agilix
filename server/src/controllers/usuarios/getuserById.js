const { Usuario,Venta, Detalle_Venta, Producto } = require("../../db");

const getUserById = async (id) => {
  if (isNaN(id)) {
    const usuarioPorId = await Usuario.findByPk(id, {
      attributes: ["id", "nombre", "telefono", "email", "dni", "estado"],
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
    });
    return usuarioPorId;
  } else throw new Error(`No existe el usuario con el el id: ${id}`);
};

module.exports = getUserById;
