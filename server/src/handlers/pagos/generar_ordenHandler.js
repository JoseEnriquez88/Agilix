const generar_orden = require("../../controllers/pagos/generar_orden");
const { Orden } = require("../../db");
const generar_ordenHandler = async (req, res) => {
    const { id_cliente, id_usuario, total_venta, InfoCarrito } = req.body;
    try {
        const productos = InfoCarrito.map(item => ({ id: item.id, cantidad: item.cantidad }));  //para hacer el descuento del producto 
        const crearOrden = await Orden.create({
            id_cliente,
            id_usuario,
            total_venta,
            productos
        })
        const orden = await generar_orden(InfoCarrito);
        res.status(201).json({ orden });
    } catch (error) {
        console.error("Error al procesar la orden:", error);
        res.status(400).json({ error: "Error al generar la orden" + error.message });
    }
};

module.exports = generar_ordenHandler;