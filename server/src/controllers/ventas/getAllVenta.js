const { Venta, Producto, Detalle_Venta, Usuario, Cliente } = require("../../db");


const getAllVenta = async () => {
    const totalVentas = await Venta.findAll({
        attributes: ["id", "fecha", "total_venta", "id_mercado_pago"],
        include: [
             {
                 model: Producto,
                 attributes: ["id", "nombre", "precio"],
                 through: { 
                     model: Detalle_Venta,
                     attributes: ["cantidad"],
                 }
             },

            {
                model: Cliente,
                attributes: ["id", "nombre"],
            },
            {
                model: Usuario,
                attributes: ["id", "nombre"]
            }
        ]
    });
    if (totalVentas.length === 0) throw new Error('No se encontraron ventas para mostrar')
    return totalVentas;
}

module.exports = getAllVenta;