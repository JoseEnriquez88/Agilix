const { Producto } = require('../../db');

const deleteProducto = async (name) => {
    const producto = await Producto.findOne({ where: { nombre: name } });
    if(!producto) throw new Error(`El producto ${name} no existe`);

    producto.activo = false;
    await producto.save();

    if(!producto) throw new Error(`El producto ${name} no pudo eliminarse.`);
    return `El producto ${name} fue eliminado exitosamente.`;
};

module.exports = deleteProducto;