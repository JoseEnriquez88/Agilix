const { Cliente, Venta } = require("../../db");
const updateCliente = async (id, nombre, email, telefono,dni,ventaId) => {
  try {
    // Buscar el cliente por ID si se proporciona
    if (id && nombre && email && telefono && dni) {
        const cliente = await Cliente.update(
        { nombre: nombre, email: email, telefono: telefono, dni: dni},
        {
          where: {
            id: id
          },
        }
      );
        if(ventaId){
          let unaVenta = await Venta.findByPk(ventaId);
          let elCliente = await Cliente.findByPk(id);
          await elCliente.addVenta(unaVenta);//mejor dicho compra
        }
      return cliente;
    }
    } catch (error) {
    // Manejo de errores si ocurre algún problema con la actualización
    return { error: "No se pudo actualizar el cliente." };
  }
};

module.exports = updateCliente;

