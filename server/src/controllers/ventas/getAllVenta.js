const { Venta } = require("../../db");


const getAllVenta = async () => {
    const totalVentas = await Venta.findAll({
        attributes: ["id", "ClienteId", "UsuarioId","fecha","total_venta"]
    });
    if(totalVentas.length === 0) throw new Error('No se encontraron ventas para mostrar') 
    return totalVentas;
}

module.exports = getAllVenta;