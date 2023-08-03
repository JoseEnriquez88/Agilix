const getByIdProduct=require("../../controllers/productos/getByIdProduct");

const getByIdProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await getByIdProduct(id);
        return res.status(200).json(producto);
    } catch (error) {
        return res.status(400).json({ error: error.message});
    }
}
module.exports =getByIdProductHandler