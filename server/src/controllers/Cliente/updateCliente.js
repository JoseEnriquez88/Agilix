const { Cliente } = require("../../db");

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { name, email, telefono, estado } = req.body;

  if (estado) {
    const estado = await Cliente.findByPk(id);
    if (estado.activo) {
      const response = await Cliente.update(
        { activo: false },
        { where: { id: id } }
      );
    } else {
      const response = await Cliente.update(
        { activo: true },
        { where: { id: id } }
      );
    }
    return res.json({ message: "Cliente actualizado exitosamente." });
  }

  // try {
  //   const cliente = await Cliente.update();
  // const cliente = await Cliente.findByPk(id);
  // if (!cliente) {
  //   return res.status(404).json({ message: 'Cliente no encontrado.' });
  // }

  // // Actualizar los campos del Cliente

  // Cliente.name = name;
  // Cliente.email = email;
  // // Agregar más campos aquí si los tienes.

  // await cliente.save();
  //   return res.json({ message: "Cliente actualizado exitosamente." });
  // } catch (error) {
  //   console.error("Error al actualizar el Cliente:", error);
  //   next(error);
  // }
};

module.exports = {
  updateCliente,
};
