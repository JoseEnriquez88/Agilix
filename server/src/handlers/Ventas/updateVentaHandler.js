const updateVenta = require("../../controllers/ventas/updateVenta");

const updateVentaHandler = async (req, res) => {
  const { id } = req.params;
  const { id_cliente, id_usuario, total_venta } = req.body;
  try {
    const venta = await updateVenta(id, id_cliente, id_usuario, total_venta);
    return res.status(200).send(venta);
  } catch (err) {
    console.error("Error:", err);

    let statusCode = 500;
    let message = "Error interno del servidor.";

    if (err.name === "ValidationError") {
      statusCode = 400;
      message = err.message;
    } else if (err.name === "SequelizeUniqueConstraintError") {
      statusCode = 409;
      message = "El registro ya existe en la base de datos.";
    }

    res.status(statusCode).json({ message });
  }
};

module.exports = updateVentaHandler;
