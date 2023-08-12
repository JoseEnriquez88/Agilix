const getAllVentaHandler = async (req, res) => {
    try {
        const ventas = await getAllVenta();
        return res.status(200).json(ventas);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getVentaByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const venta = await getVentaById(id);
      return res.status(200).send(venta);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };
  
  module.exports = {
    getVentaByIdHandler,
    getAllVentaHandler,
  };